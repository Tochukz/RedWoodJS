import {
  Form,
  TextField,
  TextAreaField,
  Label,
  Submit,
  SubmitHandler,
  FieldError,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}
const ContactPage = () => {
  const formSubmit: SubmitHandler<FormValues> = (form) => {
    console.log('fomr', form)
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={formSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
