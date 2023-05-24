import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storesType } from '../../reducers'
import { AppDispatch } from '../..'
import { getSurveys } from '../../reducers/funcReducer'
import _ from 'lodash'

const SurveyList = () => {
  let { surveys } = useSelector((state: storesType) => ({
    ...state.func,
  }))

  const dispatch = useDispatch<AppDispatch>()

  const renderContent = () => {
    const surveyList = surveys ? [...surveys].reverse() : []
    return _.map(surveyList, (survey) => {
      const { _id, title, body, dateSent, yes, no } = survey
      return (
        <div
          className='w-[80%] h-[200px] shadow-md border border-stone-400 my-[16px] rounded-md relative'
          key={_id}
        >
          <div className='text-xl px-[8px] py-[16px]'>{title}</div>
          <hr />
          <div className='px-[8px] py-[16px]'>{body}</div>
          <div className='flex w-[100%] px-[8px] py-[16px] text-[#1677FF] absolute bottom-0 justify-between'>
            <div className='flex'>
              <div className='mr-[8px]'>YES: {yes} / </div>
              <div>NO: {no}</div>
            </div>

            <div className='text-stone-400'>
              Sent on: {new Date(dateSent).toLocaleDateString()}
            </div>
          </div>
        </div>
      )
    })
  }

  React.useEffect(() => {
    dispatch(getSurveys())
  }, [])
  return <div className='flex flex-col items-center'>{renderContent()}</div>
}

export default SurveyList
