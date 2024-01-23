'use server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Header } from '../models/header'
import { connectToDB } from '../utils'

function formatSlug(slug) {
  return slug.trim().toLowerCase().replace(/\s+/g, '-')
}

export const addHeader = async (prevState, formData) => {
  console.log('formData', Object.entries(formData))
  const { userId, page, slug, text } = Object.fromEntries(formData)

  try {
    connectToDB()

    const header = await Header.findOne({ slug })

    if (header) {
      return { error: 'заголовок с таким slag уже есть' }
    }

    const newHeader = new Header({
      userId,
      page,
      slug: formatSlug(slug),
      text
    })

    await newHeader.save()
  } catch (err) {
    // console.log('action addHeader err.code', err)
    // throw new Error('Не удалось создать Header!') // при срабатывании throw перебрасывает на ошибку

    if (err.name === 'ValidationError') {
      // Обработка ошибок валидации Mongoose
      const validationErrors = Object.values(err.errors).map(
        (error) => error.message
      )
      return { error: validationErrors.join(', ') }
    } else {
      // Обработка других видов ошибок
      return { error: err.message }
    }
  }

  revalidatePath('/dashboard/headers')
  redirect('/dashboard/headers')
}

export const updateHeader = async (prevState, formData) => {
  const { id, page, slug, text } = Object.fromEntries(formData)
  console.log('id, page, slug, text', id, page, slug, text)

  try {
    connectToDB()

    const header = await Header.findOne({ slug })

    if (header) {
      return { error: 'slag занят' }
    }

    const updateFields = {
      page,
      slug: formatSlug(slug),
      text
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await Header.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update header!')
  }

  revalidatePath('/dashboard/headers')
  redirect('/dashboard/headers')
}

export const deleteHeader = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await Header.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete header!')
  }

  revalidatePath('/dashboard/headers')
}
