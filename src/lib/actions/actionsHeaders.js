'use server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Header } from '../models/header'
import { connectToDB } from '../utils'

export const addHeader = async (formData) => {
  const { userId, page, slug, text } = Object.fromEntries(formData)
  console.log('formData', formData)
  try {
    connectToDB()

    const newHeader = new Header({
      userId,
      page,
      slug,
      text
    })

    console.log('newHeader', newHeader)

    await newHeader.save()
  } catch (err) {
    console.log(err)
    throw new Error('Не удалось создать Header!')
  }

  revalidatePath('/dashboard/headers')
  redirect('/dashboard/headers')
}
