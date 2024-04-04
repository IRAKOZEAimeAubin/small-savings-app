'use server'

import {db} from '@/lib/db'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import {RegisterSchema} from '@/schemas/user'
import {getUserByEmail} from '@/data/auth/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return {error: 'Invalid credentials. Please try again!'}
  }
  const {name, email, password} = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: 'Email already in use. Try a different email.',
    }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return {success: 'Account created successfully!'}
}
