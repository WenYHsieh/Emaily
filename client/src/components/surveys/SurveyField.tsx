const SurveyField = ({ input, label }: { [key: string]: any }) => {
  return (
    <div className='flex flex-col field'>
      <label className='inline-block' htmlFor='firstName'>
        {label}
      </label>
      <input
        className='border-gray-600 border-b-2  px-[16px] py-[8px] w-[500px] focus:outline-none'
        {...input}
      ></input>
    </div>
  )
}

export default SurveyField
