'use client'

import { useActionState } from 'react'
import FormInput from '../components/form-input'
import FormButton from '../components/form.btn'
import SocialLogin from '../components/social-login'
import { createAccount } from './action'

export default function CreateAccount() {
  const [state, dispatch] = useActionState(createAccount, null)

  const fieldErrors = state && 'fieldErrors' in state ? state.fieldErrors : {}

  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>안녕하세요</h1>
        <h2 className='text-xl'>Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className='flex flex-col gap-3'>
        <FormInput
          name='username'
          type='text'
          placeholder='username'
          required
          errors={fieldErrors.username}
        />
        <FormInput
          name='email'
          type='email'
          placeholder='Email'
          required
          errors={fieldErrors.email}
        />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          required
          errors={fieldErrors.password}
        />
        <FormInput
          name='ConfirmPassword'
          type='password'
          placeholder='Confirm Password'
          required
          errors={fieldErrors.ConfirmPassword}
        />
        <FormButton text='Create account' />
      </form>
      <SocialLogin />
    </div>
  )
}
