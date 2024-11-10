'use client'

import FormInput from '../components/form-input'
import FormButton from '../components/form.btn'
import SocialLogin from '../components/social-login'
import { useFormState } from 'react-dom'
import { handleForm } from './action'

export default function LogIn() {
  const [state, action] = useFormState(handleForm, null)
  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>로그인</h1>
        <h2 className='text-xl'>아이디 패스워드를 입력해 주세요</h2>
      </div>
      <form action={action} className='flex flex-col gap-3'>
        <FormInput name='email' type='email' placeholder='Email' required />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <FormButton text='로그인' />
      </form>
      <SocialLogin />
    </div>
  )
}
