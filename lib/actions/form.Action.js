"use server"
import { connectToDB } from '../database';
import UserFrom from '../models/user.Model';
const bcrypt = require('bcryptjs');


async function hashPassword(password) {
  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw error;
  }
}
export async function sumbitForm({ name, email, number, password, country }) {

  await connectToDB()
  console.log(name, email, number, password, country)
  const hash_password = await hashPassword(password)
  console.log(hash_password)
  await UserFrom.create({
    userName: name,
    email: email,
    number: number,
    country: country,
    password: hash_password
  })


}
export async function findAll() {
  await connectToDB()
  try {
    const users = await UserFrom.find({})
    console.log(users)
    
    return users

  } catch (error) {
    console.log(error)
  }

}
export async function findBYEmail(searchTerm) {
  await connectToDB()
  try {
    const users = await UserFrom.find({
      $or: [
        { userName: searchTerm },
        {
          email: searchTerm
        }
      ]
    })
    console.log(users, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    return users

  } catch (error) {
    console.log(error)
  }
}



