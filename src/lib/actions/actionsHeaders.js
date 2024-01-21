'use server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Header } from '../models/header'
import { connectToDB } from '../utils'

export const addHeader = async (prevState, formData) => {
  const { userId, page, slug, text } = Object.fromEntries(formData)

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

// export const updateProduct = async (formData) => {
//   const { id, title, desc, image, price, stock, color, size } =
//     Object.fromEntries(formData)

//   try {
//     connectToDB()

//     const updateFields = {
//       title,
//       desc,
//       image,
//       price,
//       stock,
//       color,
//       size
//     }

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === '' || undefined) && delete updateFields[key]
//     )

//     await Product.findByIdAndUpdate(id, updateFields)
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to update product!')
//   }

//   revalidatePath('/dashboard/products')
//   redirect('/dashboard/products')
// }

export const deleteHeader = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await Header.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete product!')
  }

  revalidatePath('/dashboard/products')
}
