'use server'
import { redirect } from 'next/navigation'

import { connectToDB } from '../utils.js'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcrypt'
import { signIn, signOut } from '../auth'
import { Address, User } from '../models/user'

export const createUserAds = async (userId, newUser) => {
  try {
    connectToDB()
    const address = new Address({
      userId,
      user: newUser
    })

    await address.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete user!')
  }
}

export const register = async (prevState, formData) => {
  const { name, password, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    // throw new Error('Пароли не совпадают')
    return { error: 'Пароли не совпадают' }
  }
  try {
    connectToDB()

    const user = await User.findOne({ name })

    if (user) {
      return { error: 'Имя пользователя уже занято' }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      name,
      password: hashedPassword
    })

    await createUserAds(newUser.id, newUser)
    await newUser.save()
    console.log(
      'register: пользователь и учетная запись сохранены в базе данных'
    )

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: 'При создание User что то пошло не так' }
  }
}

export const login = async (prevState, formData) => {
  const { name, password } = Object.fromEntries(formData)

  // console.log('login  email, password', name, password)

  try {
    await signIn('credentials', { name, password })
  } catch (err) {
    console.log('actin err.message ', err.message)
    if (err.message === 'CredentialsSignin') {
      // Х-з ПОЧЕМУ НО в этот раз message вместо type
      // if (err.type === 'CredentialsSignin') {
      return { error: 'Неправильное имя или пароль, а может не АДМИН !!!' }
    }
    throw err
  }
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    // await Account.deleteOne({ userId: id })
    await User.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete user!')
  }

  revalidatePath('/dashboard/users')
}

export const updateUser = async (formData) => {
  const { id, name, email, password, image, isAdmin, isActive } =
    Object.fromEntries(formData)

  const noSpaces = password.trim()
  // console.log('noSpaces', noSpaces)
  const hashedPassword = async (noSpaces) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(noSpaces, salt)
    return hashedPassword
  }

  try {
    connectToDB()

    const oneOf =
      noSpaces === '' || undefined ? noSpaces : await hashedPassword(noSpaces)

    const updateFields = {
      email,
      name,
      password: oneOf,
      image,
      isAdmin,
      isActive
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key] // удаляем ключ объекта если он пустой, и в базу улетают только те данные которые были введены в форму
    )

    await User.findByIdAndUpdate(id, updateFields)
    console.log('saved to db')
  } catch (err) {
    console.log('actions updateUser', err)
    throw new Error('Не удалось обновить пользователя!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const updateUserAds = async (formData) => {
  const { id, phone, country, city, street, number, postalCode } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      phone,
      country,
      city,
      street,
      number,
      postalCode
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key] // удаляем ключ объекта если он пустой, и в базу улетают только те данные которые были введены в форму
    )
    // console.log('updateFields', updateFields)
    await Address.findByIdAndUpdate(id, updateFields)
    console.log('saved to db')
  } catch (err) {
    console.log('actions updateUser', err)
    throw new Error('Не удалось обновить пользователя!')
  }

  revalidatePath('/dashboard/users')
  // redirect('/dashboard/users')
}

export const handleGithubLogin = async () => {
  'use server'
  await signIn('github')
}
export const handleGoogleLogin = async () => {
  'use server'
  await signIn('google')
}

export const handleLogOut = async () => {
  'use server'
  await signOut({ redirectTo: '/about' })
  // await signOut({ redirectTo: '/' })
  // await signOut() // так тоже можно
}

// export const addUser = async (formData) => {
//   // 'use server'

//   const { name, email, password, image, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData)

//   try {
//     connectToDB()

//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       image,
//       phone,
//       address,
//       isAdmin,
//       isActive
//     })
//     console.log(newUser)
//     await newUser.save()
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to create user!')
//   }

//   revalidatePath('/dashboard/users')
//   redirect('/dashboard/users')
// }

// export const addProduct = async (formData) => {
//   const { title, desc, image, price, stock, color, size } =
//     Object.fromEntries(formData)
//   console.log('formData', formData)
//   try {
//     connectToDB()

//     const newProduct = new Product({
//       title,
//       desc,
//       image,
//       price,
//       stock,
//       color,
//       size
//     })

//     console.log('newProduct', newProduct)

//     await newProduct.save()
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to create product!')
//   }

//   revalidatePath('/dashboard/products')
//   redirect('/dashboard/products')
// }
