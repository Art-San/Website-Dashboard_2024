//---------------- Mongoose One-to-One relationship: Embedding
// import mongoose from 'mongoose'

// const CustomerSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   gender: String
// })

// const Customer = mongoose.model('Customer', CustomerSchema)

// module.exports = { Customer }

// const Identifier = mongoose.model(
//   'Identifier',
//   new mongoose.Schema({
//     cardCode: String,
//     customer: CustomerSchema
//   })
// )

// module.exports = Identifier

//-------------- Mongoose One-to-One relationship: Referencing
import mongoose from 'mongoose'

const customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
  })
)

export const Customer = customer

// export const User = mongoose.models?.User || mongoose.model('User', userSchema)

const identifier = mongoose.model(
  'Identifier',
  new mongoose.Schema({
    cardCode: String,
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    }
  })
)

export const Identifier = identifier
