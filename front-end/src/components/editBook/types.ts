import { Path, UseFormRegister } from "react-hook-form"

export interface BookRegisterInputs {
    id: number
    booksId: string
    title: string
    authors: string[]
    numberOfPages: number
    thumbnail: string
    score: number
    review: string
    startedAt: string
    endedAt: string
}

export interface BookRegisterPropTypes {
    id: string
}

export type InputProps = {
    label: string
    value: Path<BookRegisterInputs>
    register: UseFormRegister<BookRegisterInputs>
    required: boolean
}