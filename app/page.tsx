import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className='flex flex-col items-center
    justify-between min-h-screen p-6'
    >
      <div
        className='my-auto flex flex-col
      items-center gap-2 *:font-medium'
      >
        <span className='text-9xl'>🎶</span>
        <h1 className='text-4xl'>도승</h1>
        <h2 className='text-2xl'>도승 마켓에 오신걸 환영해요!</h2>
      </div>
      <div
        className='flex flex-col items-center
      gap-3 w-full'
      >
        <Link href='/create-account' className='primary-btn py-2.5 text-lg'>
          시작하기
        </Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link href='/login' className='hover:underline'>
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
}
