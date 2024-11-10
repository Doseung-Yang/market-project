'use server'

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    errors: ['패스워드가 틀렸어요', '패스워드가 너무 짧아요'],
  }
}
