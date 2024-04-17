import * as z from 'zod'

export const RegisterSchema = z.object({
  name: z.string().min(5, {
    message: 'Must be 5 or more characters long',
  }),
  email: z.string().email({message: 'Must be a valid email address'}),
  password: z
    .string()
    .refine((value) => value.length >= 12, {
      message: 'Must be 12 or more characters long',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'Must contain at least one lowercase letter',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Must contain at least one uppercase letter',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Must contain at least one number',
    })
    .refine((value) => /\W|_/.test(value), {
      message: 'Must contain at least one special character',
    }),
})

export const LoginSchema = z.object({
  email: z.string().email({message: 'Must be a valid email address'}),
  password: z
    .string()
    .refine((value) => value.length >= 12, {
      message: 'Must be 12 or more characters long',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'Must contain at least one lowercase letter',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Must contain at least one uppercase letter',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Must contain at least one number',
    })
    .refine((value) => /\W|_/.test(value), {
      message: 'Must contain at least one special character',
    }),
  code: z.optional(z.string()),
})

export const ResetSchema = z.object({
  email: z.string().email({message: 'Must be a valid email address'}),
} )

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .refine((value) => value.length >= 12, {
      message: 'Must be 12 or more characters long',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'Must contain at least one lowercase letter',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Must contain at least one uppercase letter',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Must contain at least one number',
    })
    .refine((value) => /\W|_/.test(value), {
      message: 'Must contain at least one special character',
    }),
})
