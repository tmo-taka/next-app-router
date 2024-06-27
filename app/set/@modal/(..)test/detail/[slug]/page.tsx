"use client";

import { useEffect, useState} from 'react';
// import { useParams } from 'next/navigation'
import { Modal } from '@/app/ui/Modal'

export default function Page({ params: { slug }} : { params: { slug: string } } ) {
    console.log(slug)

    const [modalText, setModalText] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`/api/lists/${slug}`);
            const data = await res.json();
            setModalText(data.data.message);
        }
        fetchData()
    }, []);

    return (
        <Modal>
            {modalText}
        </Modal>
    )
}