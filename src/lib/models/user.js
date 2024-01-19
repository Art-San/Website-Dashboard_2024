import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      max: 30
    },
    email: {
      type: String,
      default: '',
      // required: true,
      // unique: true,
      max: 50
    },
    password: {
      type: String
    },
    image: {
      type: String,
      default: '/noAvatar.png'
    },
    cameFrom: {
      type: String,
      default: 'хз'
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)

const addressSchema = new mongoose.Schema({
  userId: {
    // 659441345c71ad7d2a17c019
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  street: {
    type: String,
    default: ''
  },
  number: {
    type: String,
    default: ''
  },
  postalCode: {
    type: String,
    default: ''
  },
  user: userSchema
})

export const Address =
  mongoose.models?.Address || mongoose.model('Address', addressSchema)

// export const Visit =
//   mongoose.models?.Visit || mongoose.model('Visit', visitSchema)

// export const Account =
//   mongoose.models?.Account || mongoose.model('Account', accountSchema)

// const accountSchema = new mongoose.Schema({
//   userId: {
//     // 659441345c71ad7d2a17c019
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     default: ''
//   },
//   country: {
//     type: String,
//     default: ''
//   },
//   city: {
//     type: String,
//     default: ''
//   },
//   street: {
//     type: String,
//     default: ''
//   },
//   number: {
//     type: String,
//     default: ''
//   },
//   postalCode: {
//     type: String,
//     default: ''
//   }
// })

// export const Account =
//   mongoose.models?.Account || mongoose.model('Account', accountSchema)
