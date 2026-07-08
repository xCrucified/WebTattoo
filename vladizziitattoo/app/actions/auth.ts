'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password');
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (password === correctPassword) {
    (await cookies()).set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect('/admin');
  }

  throw new Error('Wrong password'); 
}