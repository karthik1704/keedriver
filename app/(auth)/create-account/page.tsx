import Image from 'next/image'
import type { Metadata } from 'next';
import CreateUserAccount from './create-user-account';

export const metadata:Metadata =  {
    title: 'Create Account | Keedriver',
    description: 'Create Account Page',
}
  
export default function CreateAccount() {
  return (
    <main className="w-full mx-auto">
      <CreateUserAccount/>
    </main>
  )
}
