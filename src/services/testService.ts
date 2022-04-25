import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as testRepository from "../repositories/testRepository.js";
import {
	conflictError,
	notFoundError,
	unauthorizedError,
} from "../middlewares/handleErrorsMiddleware.js";
import { users } from "@prisma/client";


export async function getTests() {
	await testRepository.getTests();
}