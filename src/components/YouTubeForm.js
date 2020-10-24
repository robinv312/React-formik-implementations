import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', '']
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
                    <ErrorMessage name="name" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="text" id="email" name="email"
                    // {...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name="email" >
                        {
                            (errorMsg) => <div className='error'>{errorMsg}</div>
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id="channel" name="channel"
                        placeholder="Youtube channel name"
                    // {...formik.getFieldProps('channel')}
                    />
                    <ErrorMessage name="channel" />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address' >
                        {(props) => {
                            const { field, form, meta } = props
                            return (<div><input type='text' id='address' {...field} />
                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                            </div>)
                        }}
                    </Field>
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook</label>
                    <Field type='text' id='facebook' name='social.facebook' />

                </div>
                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>


                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary Phone Number</label>
                    <Field type='text' id='primaryPh' name='primaryPh[0]' />

                </div>
                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                    <Field type='text' id='secondaryPh' name='primaryPh[1]' />
                </div>








                <button type="submit" >Submit</button>
            </Form>
        </Formik>
    )
}

export default YouTubeForm
