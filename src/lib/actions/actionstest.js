// const Customer = require("./models/Customer");
// const Identifier = require("./models/Identifier");

// const { Customer, Identifier } = require('../models/test')

// const createCustomer = function (name, age, gender) {
//   const customer = new Customer({
//     name,
//     age,
//     gender
//   })

//   return customer.save()
// }

// const createIdentifier = function (cardCode, customer) {
//   const identifier = new Identifier({
//     cardCode,
//     customer
//   })

//   return identifier.save()
// }

// createCustomer('bezkoder', 29, 'male')
//   .then((customer) => {
//     console.log('> Created new Customer\n', customer)

//     const customerId = customer._id.toString()
//     return createIdentifier(
//       customerId.substring(0, 10).toUpperCase(),
//       customerId
//     )
//   })
//   .then((identifier) => {
//     console.log('> Created new Identifier\n', identifier)
//   })
//   .catch((err) => console.log(err))
