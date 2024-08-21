"use client";

import type { Query } from "@/graphql/graphql";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetchAllPage = async (): Promise<Query> => {
	try {
		const res = await fetch("/api/hygraph/get_all_page");
		const data: Query = await res.json();
		return data;
	} catch (e: unknown) {
		console.log(e);
		throw new Error("fetchError");
	}
};

export const FetchMenu = () => {
	const [fetchData, setFetchData] = useState<Query | null>(null);

	useEffect(() => {
		fetchAllPage().then((data) => setFetchData(data));
	}, []);

	const pageArr = fetchData?.pages.map((pageData) => (
		<li key={pageData.slug} className="mb-1">
			<Link
				href={`/contents/${pageData.slug}`}
				className="block border-l-2 border-l-accent p-2 hover:translate-x-2"
			>
				{pageData.title}
			</Link>
		</li>
	));
	return <ul className="w-1/4 p-4">{pageArr}</ul>;
};
