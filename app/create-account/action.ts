'use server'
import { z } from 'zod'

const checkUsername = (username: string) => !username.includes('didehtmd')

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: '유저이름이 이상해요',
        required_error: '이름이 입력이 안되었어요?',
      })
      .min(4, '유저 이름이 짧아요')
      .max(15, '유저 이름이 너무 길어요')
      .refine(checkUsername, {
        message: '해당 문자는 입력할 수 없어요',
      }),
    email: z.string().email(),
    password: z.string().min(10),
    ConfirmPassword: z.string().min(10),
  })
  .refine((data) => data.password === data.ConfirmPassword, {
    message: '패스워드가 같아야해요!',
    path: ['ConfirmPassword'],
  })

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: (formData.get('username') as string) ?? '',
    email: (formData.get('email') as string) ?? '',
    password: (formData.get('password') as string) ?? '',
    ConfirmPassword: (formData.get('ConfirmPassword') as string) ?? '',
  }

  console.log('Validation Input Data:', data)
  const result = formSchema.safeParse(data)
  console.log('Validation Result:', result)

  if (!result.success) {
    console.log('Error Issues:', result.error.issues) // 상세한 에러 메시지 확인
    return result.error.flatten()
  }

  return { success: true, message: '계정이 성공적으로 생성되었습니다.' }
}
