import mongoose from 'mongoose'

const headerSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: 'аноним'
  },
  page: {
    type: String,
    unique: true,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  text: {
    type: String
  }
})

export const Header =
  mongoose.models?.Header || mongoose.model('Header', headerSchema)
