import StripeCheckout from 'react-stripe-checkout'
import { handleToken } from '../reducers/authReducer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '..'

const Payment = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    // @ts-expect-error
    <StripeCheckout
      name='Emaily'
      description='$5 for 5 email credits'
      amount={500}
      // object represents the entire payment
      token={(token) => dispatch(handleToken(token))}
      stripeKey={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
      locale='en'
    >
      <button className='text-white rounded-lg px-[16px] py-[8px] bg-[#1677FF] shadow hover:bg-[#3F96FE] transition-color duration-200'>
        ADD CREDITS
      </button>
    </StripeCheckout>
  )
}

export default Payment
