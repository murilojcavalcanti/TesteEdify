import SearchBook from '@/components/searchBook'
import MyBookList from '@/components/myBookList'

export default function MyBooks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="font-bold">Adicionar livro</h2>
        <SearchBook />
      </div>
      <div>
        <h2 className="font-bold">Ja lidos</h2>
        <MyBookList />
      </div>
    </div>
  )
}
