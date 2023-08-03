/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios'

const API_URL_BOOK = "http://127.0.0.1:3333/book"
const API_URL_LOGIN = "http://127.0.0.1:3333/login"
const API_URL_ACTIVITY_LOG = "http://127.0.0.1:3333/activityLogs"
// add token from local storage to headers

const token = localStorage.getItem('token')

const getBooks = async () => {
    return await axios
        .get(`${API_URL_BOOK}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response: AxiosResponse) =>
            response.data
        )
}

const createBook = async (book: FormData) => {
    book.append('id', Math.floor(Math.random() * 1000).toFixed(0));
    return await axios
        .post(API_URL_BOOK, book, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response: AxiosResponse) =>
            response.data
        )
}

const updateBook = async (book: FormData) => {
    console.log(book)
    return await axios
        .put(API_URL_BOOK, book, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: AxiosResponse) =>
            response.data
        )
}

const deleteBook = async (id: number) => {
    // const response = await axios.delete(API_URL_BOOK + "/" + id)
    // return response.data
    return await axios
        .delete(API_URL_BOOK + "/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: AxiosResponse) =>
            response.data
        )
}

const loginUser = async (username: string, password: string) => {
    return await axios
        .post(API_URL_LOGIN, { username, password }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response: AxiosResponse) =>
            response.data
        )
}

const getActivityLogs = async () => {
    return await axios
        .get(API_URL_ACTIVITY_LOG, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response: AxiosResponse) =>
        response.data
    )
}

export {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    loginUser,
    getActivityLogs

}