import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import SurveyField from './SurveyField'
import _ from 'lodash'

const FIELDS = [
  { name: 'title', label: 'Survey title' },
  { name: 'subject', label: 'Survey Line' },
  { name: 'body', label: 'Email body' },
  { name: 'emails', label: 'recipients' },
]
const SurveyForm: React.FunctionComponent<InjectedFormProps> = (props) => {
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
        className='px-[16px] py-[8px]'
        onSubmit={handleSubmit((value) => {
          console.log(value)
        })}
      >
        {renderField()}
        <button
          type='submit'
          className='mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#1677FF] shadow hover:bg-[#3F96FE] transition-color duration-200'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm)
