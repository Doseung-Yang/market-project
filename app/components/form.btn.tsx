interface LoadingProps {
  loading: boolean
  text: string
}

export default function FormButton({ loading, text }: LoadingProps) {
  return (
    <button
      disabled={loading}
      className='primary-btn h-10 flexitems-center justify-center disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed'
    >
      {loading ? (
        <span className='flex space-x-1'>
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
