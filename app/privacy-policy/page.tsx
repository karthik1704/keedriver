import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata =  {
    title: 'Privacy Policy | Keedriver',
    description: 'Privacy Policy Page',
}
  
export default function PrivacyPolicy() {
  return (
    <main className="flex mx-auto">
      Hello PrivacyPolicy
    </main>
  )
}
