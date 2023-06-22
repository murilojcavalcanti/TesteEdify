"use client"

import { useEffect, useState } from "react";  
import { listBooks } from "@/services/books";
import { MyBookSingle } from "@/types/book";

import BookItem from "../book";

const MyBookList = () => {
    const [list, setList] = useState<MyBookSingle[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function init() {
            const res = await listBooks()
            setList(res)
        }
        init()
    }, [])

    return (
        <div className="flex flex-col">
            {!!list?.length ? list.map((item, index) => 
                <BookItem key={index} {...item} />
            ) : <p>Sem livros cadastrados</p>}
        </div>
    )
}

export default MyBookList