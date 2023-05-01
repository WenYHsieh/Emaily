import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {
  return (
    <StripeCheckout
      name='Emaily'
      description='$5 for 5 email credits'
      amount={500}
      // object represents the entire
      token={(token) => console.log(token)}
      stripeKey={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
      locale='en'
    >
      <button className='text-gray-200 border rounded-sm border-solid border-green-600 p-2.5 bg-green-500 shadow hover:bg-green-400 transition-color duration-200'>
        Add credits
      </button>
    </StripeCheckout>
  )
}

export default Payment