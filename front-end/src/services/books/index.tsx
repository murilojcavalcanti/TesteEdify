import { BookRegisterInputs } from "@/components/editBook/types";
import { BookListPropTypes, BookPropTypes, MyBookSingle } from "@/types/book";

const API_KEY = 'AIzaSyAf38ggm6P4SgIbxoa-9Q-YjggxjqBkElM'
const API_ROOT = 'https://www.googleapis.com/books/v1/volumes'

export const searchBook = async (search: string): Promise<BookListPropTypes> => {
  return await fetch(`${API_ROOT}?q=${encodeURI(search)}&key=${API_KEY}`)
    .then(res => res.json())
    .then(respose => respose)
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}

export const getBook = async (volumeId: string): Promise<BookPropTypes> => {
    return await fetch(`${API_ROOT}/${volumeId}?key=${API_KEY}`)
      .then(res => res.json())
      .then(respose => respose)
      .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      })
}

// User books
export const saveBook = async (data: any): Promise<any> => {
  return await fetch('/api/book', {
      method: "POST",
      body: JSON.stringify(data)
    })
    //.then(res => res.json())
    .then(respose => respose)
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}

export const listBooks = async (): Promise<any> => {
  return await fetch('/api/book')
    .then(res => res.json())
    .then(respose => respose)
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}

export const getMyBook = async (volumeId: string): Promise<MyBookSingle> => {
  return await fetch(`/api/book/${volumeId}`)
    .then(res => res.json())
    .then(respose => respose[0])
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}

export const updateBook = async (data: BookRegisterInputs, id: number): Promise<any> => {
  return await fetch(`/api/book/${id}`, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(respose => respose)
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}

export const removeBook = async (id: number): Promise<any> => {
  return await fetch(`/api/book/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(respose => respose)
    .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    })
}