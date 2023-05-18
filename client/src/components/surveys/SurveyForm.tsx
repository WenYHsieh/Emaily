import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import SurveyField from './SurveyField'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail'

interface ISurveyForm {
  title: string
  subject: string
  body: string
  emails: string
}

const FIELDS = [
  { name: 'title', label: 'Survey title' },
  { name: 'subject', label: 'Survey Line' },
  { name: 'body', label: 'Email body' },
  { name: 'emails', label: 'recipients' },
] as Array<{ name: keyof ISurveyForm; label: string }>

const validate = (values: ISurveyForm) => {
  let errors = {} as ISurveyForm

  errors.emails = validateEmail(values.emails)

  _.map(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value.'
    }
  })

  return errors
}

const SurveyForm: React.FunctionComponent<InjectedFormProps<ISurveyForm>> = (
  props
) => {
  const { handleSubmit } = props
  const renderField = () => {
    return _.map(FIELDS, ({ name, label }) => {
      return (
        <Field
          key={name}
          label={label}
          type='text'
          name={name}
          component={SurveyField}
        />
      )
    })
  }

  return (
    <div>
      <form
        className='px-[80px] py-[40px] w-[85%] my-[0px] mx-[auto]'
        onSubmit={handleSubmit((value) => {
          console.log(value)
        })}
      >
        {renderField()}
        <div className='flex justify-between'>
          <Link
            to='/surveys'
            className='text-center inline-block w-[100px] mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#a1a4a7] shadow hover:bg-[#ced2d5] transition-color duration-200'
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='w-[100px] mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#1677FF] shadow hover:bg-[#3F96FE] transition-color duration-200'
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm)
