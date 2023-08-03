/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik } from 'formik'
import { createBook } from '../core/_requests';
import { FC } from 'react';

type props = {
    showAddBookModal: boolean
}


const AddBookModal: FC<props> = ({showAddBookModal}) => {

    

    return (
        <div className="modal modal-sheet position-fixed d-inline   " tabIndex={-1} role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Add Book</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            onClick={() => {
                                window.location.href = "/books"
                            }}
                        ></button>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <Formik
                            initialValues={{
                                name: '',
                                author: '',
                                cover_photo: new File([], '')

                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                const formData = new FormData();
                                formData.append('name', values.name);
                                formData.append('author', values.author);
                                formData.append('cover_photo', values.cover_photo);
                                createBook(formData).then((response) => {
                                    if (response) {
                                        // window.location.href = "/books"
                                    }
                                })
                                setSubmitting(false);
                            }
                            }
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,

                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control rounded-3"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            id="form3Example3"
                                        />
                                        <label className="form-label" htmlFor="form3Example3">Book Name</label>

                                    </div>

                                    {errors.name && touched.name && errors.name}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            name="author"
                                            className="form-control rounded-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.author}
                                            id="form3Example4"
                                        />
                                        <label className="form-label" htmlFor="form3Example4">Book author</label>

                                    </div>

                                    {errors.author && touched.author && errors.author}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="file"
                                            name="cover_photo"
                                            className="form-control rounded-3"
                                            onChange={(e) => {
                                                values.cover_photo = e.target.files![0]
                                            }}
                                            onBlur={handleBlur}
                                            id="form3Example5"
                                        />
                                        <label className="form-label" htmlFor="form3Example5">Book cover photo</label>

                                    </div>
                                    <button disabled={isSubmitting}
                                        className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                        onClick={() => {
                                            // window.location.href = "/books"
                                        }}
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default AddBookModal