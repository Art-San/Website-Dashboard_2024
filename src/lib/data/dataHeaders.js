import { Header } from '../models/header.js'
import { connectToDB } from '../utils.js'

export const fetchHeaders = async (q, page) => {
  console.log(q)
  const regex = new RegExp(q, 'i')

  const ITEM_PER_PAGE = 5

  try {
    connectToDB()
    const count = await Header.find({ slug: { $regex: regex } }).count()
    const headers = await Header.find({ slug: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
    return { count, headers }
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch headers!')
  }
}

export const fetchHeaderSlug = async (slug = 'def') => {
  if (!slug) {
    return 'текст из actions: Slug пришел пустой заголовка нет '
  }
  try {
    connectToDB()
    const header = await Header.findOne({ slug: slug })

    return header.text
  } catch (err) {
    console.log('err err', err.message)
    return null
    // return 'текст из actions: Slug пришел пустой заголовка нет '
    // throw new Error('Failed to fetch headers!')
  }
}

export const fetchHeader = async (id) => {
  try {
    connectToDB()
    const header = await Header.findById(id)
    return header
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch header!')
  }
}
