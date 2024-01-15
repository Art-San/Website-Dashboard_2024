import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },
    password: {
      type: String
    },
    img: {
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

// const visitSchema = new mongoose.Schema(
//   {
//     userId: {
//       // 659441345c71ad7d2a17c019
//       type: String,
//       required: true
//     },
//     isActive: {
//       type: Boolean,
//       default: false
//     }
//   },
//   { timestamps: true }
// )

const accountSchema = new mongoose.Schema(
  {
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
    }
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
// export const Visit =
//   mongoose.models?.Visit || mongoose.model('Visit', visitSchema)

export const Account =
  mongoose.models?.Account || mongoose.model('Account', accountSchema)
