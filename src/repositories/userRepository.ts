import { client } from "../database.js";

export async function findUserByEmail(email: string) {
	const user = await client.users.findMany({
		where: {
			email: email
		}
	});

	// console.log(user)
	return user
}

export async function insertUser(email: string, hashedPassword: string) {
	const user = await client.users.create({
		data: {
			email: email,
			password: hashedPassword
		}
	});
}
