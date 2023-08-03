import { Formik } from "formik";
import { loginUser } from "../core/_requests";

const Login = () => {



  return (
    <section className="text-center">
      <div className="p-5 bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }}></div>
      <div className="card  shadow-5-strong text-light container "
        style={{ marginTop: '-100px', background: 'hsla(0, 0%, 10%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <div className="card-body py-5 px-md-5">

          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Login</h2>
              <Formik
                initialValues={{ username: '', password: '' }}

                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    const username = values.username
                    const password = values.password
                    console.log(username, password)
                    loginUser(username , password).then((response) => {
                      if (response) {
                        window.location.href = "/books"
                        localStorage.setItem('token', response.token)
                      }
                    })
                    setSubmitting(false);
                  }, 100);
                }}

              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */

                }) => (

                  <form onSubmit={handleSubmit}>

                    <label className="form-label" htmlFor="form3Example3">Username</label>
                    <div className="form-outline mb-4">
                      <input
                        type="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        id="form3Example3"
                      />
                    </div>

                    {errors.username && touched.username && errors.username}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <div className="form-outline mb-4">

                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          id="form3Example4"
                        />
                      </div>
                    </div>


                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}
                      className="btn btn-primary btn-block mb-4"
                      onClick={() => {
                        handleSubmit()
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
      </div>
    </section >

  )
}

export default Login