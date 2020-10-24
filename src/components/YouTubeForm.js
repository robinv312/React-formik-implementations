import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log(values)
}

const validate = values => {
    // custom validation
    // let errors = {}
    // if (!values.name) {
    //     errors.name = 'Required'
    // }
    // if (!values.email) {
    //     errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email format'
    // }
    // if (!values.channel) {
    //     errors.channel = 'Required'
    // }
    // return errors

}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})


function YouTubeForm() {

    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} >
            <Form >
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id="name" name="name"
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur} 
                    // {...formik.getFieldProps('name')}
                    />
                    <ErrorMessage name="name"/>
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="text" id="email" name="email"
                    // {...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id="channel" name="channel"
                    // {...formik.getFieldProps('channel')}
                    />
                    <ErrorMessage name="channel"/>
                </div>


                <button type="submit" >Submit</button>
            </Form>
        </Formik>
    )
}

export default YouTubeForm
