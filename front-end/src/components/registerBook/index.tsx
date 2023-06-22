"use client"

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { BookRegisterInputs, BookRegisterPropTypes, InputProps } from "./types";
import { DateFormat } from "@/misc/format";
import { getBook, saveBook } from "@/services/books";
import { BookPropTypes } from "@/types/book";

import Rating from "../rating";
  
const Input = ({ label, value, register, required }: InputProps) => (
    <div className="flex flex-row justify-between">
        <label>{label}</label>
        <input type="date" className="border" {...register(value, { required })} />
    </div>
)

const BookRegister = ({ id }: BookRegisterPropTypes) => {
    const router = useRouter()
    const [single, setSingle] = useState<BookPropTypes>()
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookRegisterInputs>()
    const onSubmit: SubmitHandler<BookRegisterInputs> = async (data: BookRegisterInputs) => {
        try {
            setLoading(true)
            if (single) {
                data.booksId = single.id
                data.title = single.volumeInfo.title
                data.authors = single.volumeInfo.authors
                data.thumbnail = single.volumeInfo.imageLinks.thumbnail
                data.numberOfPages = 122
            }
            await saveBook(data)
            toast('Seu livro foi cadastrado com sucesso.', { hideProgressBar: true, autoClose: 2000, type: 'success', position:'bottom-right' })
            router.push(`/my-books/${data.booksId}?edit=true`)
        }
        catch (e) {
            console.log('error', e)
            toast('Algo deu errado. Tente novamente', { hideProgressBar: true, autoClose: 2000, type: 'error', position:'bottom-right' })
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        async function init() {
            const res = await getBook(id)
            setSingle(res)
        }
        init()
    }, [id])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {single?.volumeInfo.imageLinks?.thumbnail && (
                <div className="flex items-center justify-center">
                    <Image width="250" height="500" src={single.volumeInfo.imageLinks.thumbnail} alt={single?.volumeInfo.title} />
                </div>
            )}
            <div>
                <div className="bg-white p-4 max-w-lg mx-auto h-full shadow rounded-lg">
                    <h1 className="font-bold text-lg">{single?.volumeInfo.title}</h1>
                    <div className="flex justify-between mb-8">
                        <h3 className="text-sm text-slate-500">{single?.volumeInfo.authors}</h3>
                        {single?.volumeInfo && <span className="text-sm">{DateFormat(single.volumeInfo.publishedDate)}</span>}
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Começei a ler" value="startedAt" register={register} required />
                        <Input label="Terminei de ler" value="endedAt" register={register} required={false} />
                        <div className="flex flex-row justify-between">
                            <label>Sua avaliação</label>
                            <Rating change={(rating) => setValue("score", rating)} rating={watch("score")}/>
                        </div>
                        <div className="flex flex-col">
                            <label>Escreva uma resenha</label>
                            <textarea rows={5} className="border" {...register("review")} />
                        </div>
                        <input type="submit" value={loading ? "Enviando..." : "Adicionar Livro"} className="bg-blue-400 text-white p-2 rounded-sm cursor-pointer" disabled={loading} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookRegister