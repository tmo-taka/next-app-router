"use client";

// import { useParams } from 'next/navigation'
import { Modal } from "@/app/ui/Modal";
import { useEffect, useState } from "react";

export default function Page({
	params: { slug },
}: { params: { slug: string } }) {
	console.log(slug);

	const [modalText, setModalText] = useState("");

	const fetchData = async () => {
		const res = await fetch(`/api/lists/${slug}`);
		const data = await res.json();
		setModalText(data.data.message);
	};

	useEffect(() => {
		fetchData();
	});

	return <Modal>{modalText}</Modal>;
}
