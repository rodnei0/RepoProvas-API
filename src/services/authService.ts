import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  conflictError,
  unauthorizedError,
} from "../middlewares/handleErrorsMiddleware.js";
import * as userRepository from "../repositories/userRepository.js";

export async function signUp({ email, password }) {
  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser === []) {
    throw conflictError('User');
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  userRepository.insertUser(email, hashedPassword);
}

export async function signIn({ email, password }) {
  // const user = await userRepository.findUserByEmail(email);
  // if (!user || !bcrypt.compareSync(password, user.password)) {
  //   throw unauthorizedError('Password');
  // }

  // const token = jwt.sign(
  //   {
  //     id: user.id,
  //   },
  //   process.env.JWT_SECRET
  // );

  // return {
  //   token,
  // };
}

export async function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
