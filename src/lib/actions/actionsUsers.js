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
  const { username, password, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    // throw new Error('Пароли не совпадают')
    return { error: 'Пароли не совпадают' }
  }
  try {
    connectToDB()

    const user = await User.findOne({ username })

    if (user) {
      return { error: 'Имя пользователя уже занято' }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
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
  const { username, password } = Object.fromEntries(formData)

  // console.log('login  email, password', username, password)

  try {
    await signIn('credentials', { username, password })
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
  const { id, username, email, password, img, isAdmin, isActive } =
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
      username,
      password: oneOf,
      img,
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
  await signOut({ redirectTo: '/' })
  // await signOut() // так тоже можно
}

// export const updateUserAds = async (formData) => {
//   console.log('formData', formData)
//   const { id, phone, country, city, street, number, postalCode } =
//     Object.fromEntries(formData)

//   try {
//     connectToDB()

//     const updateFields = {
//       id,
//       phone,
//       country,
//       city,
//       street,
//       number,
//       postalCode
//     }
//     const user = await User.findById(id)
//     if (!user) {
//       throw new Error('User not found')
//     }

//     // Обновление полей адреса внутри пользователя
//     Object.entries(updateFields).forEach(([key, value]) => {
//       // Проверка на пустую строку перед обновлением
//       if (value !== '') {
//         user.address[key] = value
//       }
//     })

//     // Сохранение пользователя с обновленным адресом
//     const updatedUser = await user.save()

//     console.log('updateUserAds', updatedUser)

//     console.log('saved to db')
//   } catch (err) {
//     console.log('actions updateUser', err)
//     throw new Error('Не удалось обновить пользователя!')
//   }

//   revalidatePath('/dashboard/users')
//   redirect('/dashboard/users')
// }

// export const addUser = async (formData) => {
//   // 'use server'

//   const { username, email, password, img, phone, address, isAdmin, isActive } =
//     Object.fromEntries(formData)

//   try {
//     connectToDB()

//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       img,
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
//   const { title, desc, img, price, stock, color, size } =
//     Object.fromEntries(formData)
//   console.log('formData', formData)
//   try {
//     connectToDB()

//     const newProduct = new Product({
//       title,
//       desc,
//       img,
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

// export const updateProduct = async (formData) => {
//   const { id, title, desc, img, price, stock, color, size } =
//     Object.fromEntries(formData)

//   try {
//     connectToDB()

//     const updateFields = {
//       title,
//       desc,
//       img,
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

// export const deleteProduct = async (formData) => {
//   const { id } = Object.fromEntries(formData)

//   try {
//     connectToDB()
//     await Product.findByIdAndDelete(id)
//   } catch (err) {
//     console.log(err)
//     throw new Error('Failed to delete product!')
//   }

//   revalidatePath('/dashboard/products')
// }
