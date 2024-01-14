import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50
    },
    password: {
      type: String
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
    img: {
      type: String,
      default: '/noAvatar.png'
    },
    username: {
      type: String,
      default: 'Иван'
    },

    surname: {
      type: String,
      default: 'Иванов'
    },

    // age: {
    //   type: Number
    // },
    phone: {
      type: String,
      default: '+7-(777)-777-77-77'
    }
    // country: {
    //   type: String,

    // },
    // address: {
    //   type: String
    // },
    // sex: {
    //   type: String,
    //   enum: ['male', 'female', 'other']
    // }
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
// export const Visit =
//   mongoose.models?.Visit || mongoose.model('Visit', visitSchema)

export const Account =
  mongoose.models?.Account || mongoose.model('Account', accountSchema)
