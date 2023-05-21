import { Field, SubmitHandler, reduxForm } from 'redux-form'
import SurveyField from './SurveyField'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail'
import { ISurveyForm, formField } from './formField'

type Props = {
  setShowReview: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: SubmitHandler<ISurveyForm, {}, string>
}

const validate = (values: ISurveyForm) => {
  let errors = {} as ISurveyForm

  errors.recipients = validateEmail(values.recipients)

  _.map(formField, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value.'
    }
  })

  return errors
}

const SurveyForm: React.FC<Props> = (props: Props) => {
  const { handleSubmit, setShowReview } = props
  const renderField = () => {
    return _.map(formField, ({ name, label }) => {
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
          setShowReview(true)
        })}
      >
        {renderField()}
        <div className='flex justify-between'>
          <Link
            to='/surveys'
            className='text-center inline-block w-[100px] mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#a1a4a7] shadow hover:bg-[#ced2d5] transition-color duration-200'
          >
            CANCEL
          </Link>
          <button
            type='submit'
            className='w-[100px] mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#1677FF] shadow hover:bg-[#3F96FE] transition-color duration-200'
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm as any)
