import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata =  {
    title: 'Contact us | Keedriver',
    description: 'Contact Page',
}
  
export default function Contact() {
  return (
    <main className="flex mx-auto">
      Hello Contact
    </main>
  )
}
