import { MyBookSingle } from "@/types/book"
import Link from "next/link"
import Rating from "../rating"
import { DateFormat } from "@/misc/format"

const BookItem = ({ booksId, title, authors, thumbnail, score, startedAt }: MyBookSingle) => {
    return (
        <Link href={{ pathname: `/my-books/${booksId}`, query: { edit: 'true' } }} className="p-3 bg-white border border-gray-300 rounded-lg font-black my-3">
            <div className="flex flex-row">
                {thumbnail && <img className="w-1/5" alt="" src={thumbnail} />}
                <div className="flex flex-col justify-center ml-2 w-3/4">    
                    <h4 className="text-lg truncate font-bold leading-tight">
                        {title}
                    </h4>
                    <span className="text-base font-ligth text-blue-700">
                        {authors}
                    </span>
                    <div className="items-center flex flex-row">
                        <Rating rating={score}/>
                    </div>
                    <div className="text-sm truncate font-light mt-3">
                        <span>Voce começou a ler em: {DateFormat(startedAt)}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BookItem

