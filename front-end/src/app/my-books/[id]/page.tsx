import BookEdit from '@/components/editBook'
import BookRegister from '@/components/registerBook'

export default function MyBookSingle({ params, searchParams }: { params: { id: string }; searchParams?: { edit?: boolean } }) {    
    return (
        <div className="max-w-2xl mx-auto">
            {searchParams?.edit ? <BookEdit id={params.id} /> : <BookRegister id={params.id} />}
        </div>
    )
}
