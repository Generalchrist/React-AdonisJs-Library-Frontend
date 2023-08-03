/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { BookModel } from '../core/_models'
import { deleteBook, getBooks } from '../core/_requests'
import AddBookModal from '../components/AddBookModal'
import EditBookModal from '../components/EditBookModal'
import { useQuery, useQueryClient } from 'react-query'


const books = () => {
    const queryClient = useQueryClient();
    const { data: response, isFetching, refetch } = useQuery(
        'get-books',
        async () => {
            const response = await getBooks()
            return response
        },
        {}
    );

    const handleRefetchBooks = () => {
        queryClient.invalidateQueries('get-books').then(() => {
            refetch()
        })
    };

    const handleDeleteBook = (id: number) => {
        deleteBook(id).then(() => {
            handleRefetchBooks()
        })
    }

    const [books, setBooks] = useState(response ? response : [])
    const [bookId, setBookId] = useState(0)

    if (response !== undefined && books.length === 0 && response.length !== 0 && !isFetching) {
        setBooks(response)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const handleEditCloseModal = () => {
        setIsEditModalOpen(false);
    };
    const handleEditOpenModal = () => {
        setIsEditModalOpen(true);
    };


    return (
        <main>
            {isModalOpen && <AddBookModal onAddBookSuccess={handleRefetchBooks} onClose={handleCloseModal} />}
            {isEditModalOpen && <EditBookModal bookId={bookId} onClose={handleEditCloseModal} />}
            <div className="p-5 bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }}>
                <section className=" text-center container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Welcome to Booklandia - Where Imagination Comes to Life!</h1>
                            <p className="lead text-body-secondary">
                                Discover captivating books! Browse names, authors, and cover photos. Welcome to Booklandia
                            </p>
                            <p>
                                <button type='button'
                                    className="btn btn-outline-light my-2"
                                    onClick={handleOpenModal}
                                >Add New Book</button>
                                <button
                                    type='button'
                                    className="btn btn-outline-light my-2 ml-5"
                                    onClick={handleRefetchBooks}
                                >{isFetching ? 'Refreshing...' : 'Refresh'}
                                </button>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="album py-5 ">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {books.map((book: BookModel) => {
                            return (
                                <div className="col-md-3" key={book.id}>
                                    <div className="card shadow-sm">

                                        <img src={`http://127.0.0.1:3333/${book.cover_photo}`} className='w-100' height={200} alt="" />
                                        <div className="card-body">
                                            <p className="card-text">{book.author}</p>
                                            <p className="card-text">{book.name}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary"
                                                        onClick={() => {
                                                            handleEditOpenModal()
                                                            setBookId(book.id)
                                                        }}
                                                    >Edit</button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-secondary"
                                                        onClick={() => {
                                                            handleDeleteBook(book.id)
                                                        }}

                                                    >Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default books