"use client";

import { Loading } from "@/app/ui/Loading";
import type { Page } from "@/graphql/graphql";
import { useEffect, useState } from "react";

type GetPage = {
	page: Page;
};

const fetchPage = async (slug: string): Promise<GetPage> => {
	try {
		const res = await fetch(`/api/hygraph/get_page/${slug}`);
		const data: GetPage = await res.json();
		return data;
	} catch (e) {
		throw new Error("エラーです");
	}
};

const SlugPage = ({ params: { slug } }: { params: { slug: string } }) => {
	const [fetchData, setFetchData] = useState<GetPage | null>(null);

	useEffect(() => {
		fetchPage(slug).then((data) => setFetchData(data));
	}, [slug]);

	if (!fetchData) {
		return <Loading />;
	}

	return (
		<div className="p-6">
			<h1 className="mb-6 font-bold text-4xl">{fetchData.page?.title}</h1>

			<p>{fetchData.page?.subtitle}</p>
			<div className="p-8">
				<div
					dangerouslySetInnerHTML={{
						__html: `${fetchData.page?.content.html}`,
					}}
				/>
			</div>
		</div>
	);
};

export default SlugPage;
