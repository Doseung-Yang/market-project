'use client'
import { useFormStatus } from 'react-dom'

interface LoadingProps {
  text: string
}

export default function FormButton({ text }: LoadingProps) {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className='primary-btn h-10 flexitems-center justify-center disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed'
    >
      {pending ? (
        <span className='flex space-x-1 items-center justify-center'>
          {Array.from('로딩중...').map((char, index) => (
            <span
              key={index}
              className='inline-block animate-wave'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      ) : (
        text
      )}
    </button>
  )
}
