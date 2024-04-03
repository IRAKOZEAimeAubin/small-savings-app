'use server'

import * as z from 'zod'
import {LoginSchema} from '@/schemas/user'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return {error: 'Invalid credentials. Please try again!'}
  }

  return {success: 'User logged in successfully!'}
}
