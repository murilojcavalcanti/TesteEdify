"use client"

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { BookRegisterInputs, BookRegisterPropTypes, InputProps } from "./types";
import { DateFormat } from "@/misc/format";
import { getMyBook, removeBook, updateBook } from "@/services/books";
import { MyBookSingle } from "@/types/book";

import Rating from "../rating";
  
const Input = ({ label, value, register, required }: InputProps) => (
    <div className="flex flex-row justify-between">
        <label>{label}</label>
        <input type="date" className="border" {...register(value, { required })} />
    </div>
)

const BookEdit = ({ id }: BookRegisterPropTypes) => {
    const router = useRouter()
    const [single, setSingle] = useState<MyBookSingle>()
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookRegisterInputs>()
    const onSubmit: SubmitHandler<BookRegisterInputs> = async (data: BookRegisterInputs) => {
        try {
            setLoading(true)
            if (!single) return
            await updateBook(data, single.id)
            toast('Seu livro foi salvo com sucesso.', { hideProgressBar: true, autoClose: 2000, type: 'success', position:'bottom-right' })
        }
        catch (e) {
            toast('Algo deu errado. Tente novamente', { hideProgressBar: true, autoClose: 2000, type: 'error', position:'bottom-right' })
        }
        finally {
            setLoading(false)
        }
    }

    async function handleRemove() {
        if (!single) return
        await removeBook(single.id)
        toast('O livro foi removido com sucesso.', { hideProgressBar: true, autoClose: 2000, type: 'success', position:'bottom-right' })
        router.push('/')
    }

    useEffect(() => {
        async function init() {
            const res = await getMyBook(id)
            setSingle(res)
            console.log(res)
            setValue("startedAt", DateFormat(res.startedAt, true))
            res.endedAt && setValue("endedAt", DateFormat(res.endedAt, true))
            res.score && setValue("score", res.score)
            res.review && setValue("review", res.review)
        }
        init()
    }, [id])

    return (
        <div>
            <h2 className="text-lg font-bold mb-3">Editar meu livro</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {single?.thumbnail && (
                    <div className="flex items-center justify-center">
                        <Image width="250" height="500" src={single.thumbnail} alt={single?.title} />
                    </div>
                )}
                <div>
                    <div className="bg-white p-4 max-w-lg mx-auto h-full shadow rounded-lg">
                        <h1 className="font-bold text-lg">{single?.title}</h1>
                        <div className="flex justify-between mb-8">
                            <h3 className="text-sm text-slate-500">{single?.authors}</h3>
                            {/* {single? && <span className="text-sm">{DateFormat(single.publishedDate)}</span>} */}
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
                            <div className="flex flex-row gap-3">
                                <button onClick={handleRemove} type="button" className="bg-red-400 text-white w-full">Deletar</button>
                                <input type="submit" value={loading ? "Enviando..." : "Salvar Livro"} className="w-full bg-blue-400 text-white p-2 rounded-sm cursor-pointer" disabled={loading} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookEdit