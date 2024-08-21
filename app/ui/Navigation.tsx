"use client";

import type { Query } from "@/graphql/graphql";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetchNavigation = async (): Promise<Query> => {
	try {
		const res = await fetch("/api/hygraph/get_navigation");
		const data: Query = await res.json();
		return data;
	} catch (e: unknown) {
		throw new Error("fetchError");
	}
};

export const Navigation = () => {
	const [fetchData, setFetchData] = useState<Query | null>(null);
	useEffect(() => {
		fetchNavigation().then((data) => setFetchData(data));
	}, []);

	const navArr = fetchData?.navigations?.map((nav) => {
		const getFirstLink = nav.link[0];
		return (
			<li key={nav.navId} className="border-2 border-white">
				<Link
					href={getFirstLink.externalUrl}
					className="block bg-accent px-8 py-4 text-white"
				>
					{getFirstLink.displayText}
				</Link>
			</li>
		);
	});
	return (
		<nav>
			<ul className="flex">{navArr}</ul>
		</nav>
	);
};
