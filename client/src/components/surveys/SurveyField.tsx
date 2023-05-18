const SurveyField = ({
  input,
  label,
  meta: { error, touched },
}: {
  [key: string]: any
}) => {
  return (
    <div className='flex flex-col field'>
      <label className='inline-block text-gray-500' htmlFor='firstName'>
        {label}
      </label>
      <input
        className='mb-[8px] border-gray-500 border-b-2 px-[16px] py-[8px] w-[100%] focus:outline-none focus:border-blue-500'
        {...input}
      ></input>
      <div className='h-[24px] mb-[8px] text-red-400'>{touched && error}</div>
    </div>
  )
}

export default SurveyField
