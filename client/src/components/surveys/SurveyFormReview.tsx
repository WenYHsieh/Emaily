import { useDispatch, useSelector } from 'react-redux'
import { storesType } from '../../reducers'
import { formField } from './formField'
import _ from 'lodash'
import { submitSurvey } from '../../reducers/funcReducer'
import { AppDispatch } from '../..'
import { useNavigate } from 'react-router-dom'

type Props = {
  setShowReview: React.Dispatch<React.SetStateAction<boolean>>
}
const SurveyFormReview = (props: Props) => {
  const navigate = useNavigate()
  const { setShowReview } = props
  const dispatch = useDispatch<AppDispatch>()
  const { surveyForm } = useSelector((state: storesType) => ({
    ...state.form,
  }))
  const { values: formData } = surveyForm as any

  const renderContent = () => {
    return _.map(formField, ({ name, label }) => {
      return (
        <div key={name} className='flex flex-col field'>
          <label className='inline-block text-gray-500' htmlFor='firstName'>
            {label}
          </label>
          <div>{formData[name]}</div>
        </div>
      )
    })
  }

  return (
    <div className='px-[80px] py-[40px] w-[85%] my-[0px] mx-[auto]'>
      <h4>Please confirm your entries.</h4> {renderContent()}
      <div className='flex justify-between'>
        <button
          className='w-[100px] mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#d1e933] shadow hover:bg-[#e5ff3a] transition-color duration-200'
          onClick={() => {
            setShowReview(false)
          }}
        >
          CANCEL
        </button>
        <button
          type='submit'
          className='mt-[16px] text-white rounded-lg px-[16px] py-[8px] bg-[#1677FF] shadow hover:bg-[#3F96FE] transition-color duration-200'
          onClick={() => {
            dispatch(submitSurvey({ formData, navigate }))
          }}
        >
          SEND SURVEY
        </button>
      </div>
    </div>
  )
}

export default SurveyFormReview
