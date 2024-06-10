const usersRepo = require('../repositories/customersRepo');

const getAllCustomers = async () => {
  let { data: customers } = await usersRepo.getAllCustomers();

  customers = customers.map((cust) => {
    return {
      name: cust.name,
      email: cust.email,
      city: cust.address.city,
    };
  });

  return customers;
};

module.exports = { getAllCustomers };
