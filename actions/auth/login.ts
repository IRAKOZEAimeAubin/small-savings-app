'use server'

import * as z from 'zod'
import {LoginSchema} from '@/schemas/user'
import {signIn} from '@/auth'
import {DEFAULT_LOGIN_REDIRECT} from '@/routes'
import {AuthError} from 'next-auth'
import {getUserByEmail} from '@/data/auth/user'
import {generateVerificationToken} from '@/lib/tokens'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return {error: 'Invalid credentials. Please try again!'}
  }

  const {email, password} = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {error: 'Oops! Try again. Check your email and password.'}
  }

  // if (!existingUser.emailVerified) {
  //   const verificationToken = await generateVerificationToken(
  //     existingUser.email,
  //   )

  //   return {success: 'Confirmation email sent!'}
  // }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {error: 'Invalid credentials. Please try again!'}
        default:
          return {error: 'Something went wrong. Please try again!'}
      }
    }

    throw error
  }
}
