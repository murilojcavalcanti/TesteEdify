interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
}

interface VolumeInfo {
    title: string
    authors: string[]
    imageLinks: ImageLinks
    categories: string[]
    language: string
    publishedDate: string
}

export interface BookPropTypes {
    id: string
    volumeInfo: VolumeInfo
}

export interface BookListPropTypes {
    items: BookPropTypes[]
    kind: string
    totalItems: number
}

export interface MyBookSingle {
    id: number
    booksId: string
    title: string
    authors: string[]
    thumbnail: string
    numberOfPages: number
    review: string
    score: number
    startedAt: string
    endedAt: string 
}