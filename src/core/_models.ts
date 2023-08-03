/* eslint-disable @typescript-eslint/no-explicit-any */

export type LoginModel = {
    username: string,
    password: string
}

export type BookModel = {
    id: number,
    name: string,
    author: string,
    cover_photo: any,
}

export type ActivityLogsModel = {
    id: number,
    user_id: number,
    book_id: number,
    activity_type: string,
}