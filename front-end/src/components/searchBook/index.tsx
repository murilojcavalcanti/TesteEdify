"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

import { searchBook } from "@/services/books"
import { BookPropTypes } from "@/types/book"

type Inputs = {
    search: string
}

const SearchBook = () => {
    const { register, watch, formState: { errors } } = useForm<Inputs>()
    const [bookList, setBookList] = useState<BookPropTypes[]>()

    useEffect(() => {
        const subscription = watch(async ({ search }) => {
            if (search && search.length > 3) {
                const res = await searchBook(search)
                setBookList(res.items)
                return
            }
            setBookList(undefined)
        })
        
        return () => subscription.unsubscribe()
      }, [watch])

    return (
        <div className="w-full h-full select-none mt-4">
          <div className="w-4/6 z-50 relative">
            <div className="bg-white w-full h-12 mb-3 border border-gray-300 rounded-lg p-2">
            <form>
                <input placeholder="Informe o nome do livro" className="w-full h-full px-4 rounded-lg focus:outline-none" {...register("search")} />
            </form>
            </div>
            {!!bookList?.length && (
                <ul className="bg-white w-full rounded-xl shadow-xl overflow-hidden p-1">
                    {bookList.map((item: BookPropTypes, index) => (
                        <li key={index} className="w-full p-3 pl-4 items-center hover:bg-gray-300 rounded-lg cursor-pointer">
                            <Link className="flex space-x-4" href={{ pathname: `/my-books/${item.id}` }}>
                                <div className="flex items-center justify-center">
                                    {item.volumeInfo.imageLinks?.smallThumbnail && (
                                        <div className="h-12 w-12 rou nded-sm flex items-center justify-center text-3xl">
                                            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-base">
                                        {item.volumeInfo.title}
                                    </div>
                                    <div className="flex flex-col space-y-2 text-xs text-gray-500">
                                        <span>
                                            {item.volumeInfo.authors}
                                        </span>
                                        <span>
                                            {item.volumeInfo.publishedDate}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </div>
    )
}

export default SearchBook

