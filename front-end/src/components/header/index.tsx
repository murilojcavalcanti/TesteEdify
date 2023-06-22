import Link from "next/link"

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex flex-row justify-between items-center">
                        <Link className="mr-12" href={{ pathname: '/' }}>
                            <span className="self-center text-xl font-semibold whitespace-nowrap uppercase">
                                Reading.com
                            </span>
                        </Link>
                        <div className="items-center w-full flex w-auto order-1">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href={{ pathname: '/' }} className="block rounded bg-transparent text-blue-700 p-0">
                                        Meus livros
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header