import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''} `

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      <div>{renderError(meta)}</div>
    </div>
  )
}

const renderError = ({ error, touched }) => {
  if ((error, touched)) {
    return <div className='ui error message'>{error}</div>
  }
}

// the component
const StreamForm = ({ handleSubmit, onSubmit }) => {
  const onFormSubmit = formValues => {
    onSubmit(formValues)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='ui form error'>
      <Field name='title' component={renderInput} label='Enter Title' />
      <Field name='description' component={renderInput} label='Enter Description' />
      <button className='ui button primary'>submit</button>
    </form>
  )
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'Title is a mandatory field'
  }
  if (!formValues.description) {
    errors.description = 'Description is mandatory bruh'
  }

  return errors
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('streamForm'))
}

export default reduxForm({
  form: 'streamForm',
  validate,
  onSubmitSuccess: afterSubmit,
})(StreamForm)
