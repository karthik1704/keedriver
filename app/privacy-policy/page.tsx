import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata =  {
    title: 'Privacy Policy | Keedriver',
    description: 'Privacy Policy Page',
}
  
export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col bg-stone-100">
      <h1 className="text-white bg-rose-700 p-4 text-center text-2xl md:text-3xl font-bold">KeeDriver Privacy Policy</h1>
      <div className="max-w-4xl  mx-auto p-8">
        
        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Introduction</h2>
          <p className="text-gray-700 mb-3">
            Welcome to KeeDriver! We value your trust and are committed to protecting your privacy. This Privacy Policy explains how KeeDriver collects, uses, and shares information about you when you use our services, including our website, mobile application, and any other services provided by KeeDriver.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mb-1">1. Information You Provide to Us</h3>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>Registration Information: When you create an account or use our services, we collect personal information such as your name, email address, phone number, and payment information.</li>
            <li>Profile Information: We collect any information you provide to us, such as your preferences, booking history, and feedback.</li>
            <li>Communications: If you contact us, we may collect information related to your communications, including the content of messages and any associated metadata.</li>
          </ul>

          <h3 className="text-xl font-medium mb-1">2. Information We Collect Automatically</h3>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>Usage Data: We collect information about your interactions with our services, such as IP addresses, device information, browser type, operating system, and pages visited.</li>
            <li>Location Data: With your consent, we may collect your precise location data to provide location-based services, such as finding nearby drivers.</li>
            <li>Cookies and Similar Technologies: We use cookies and similar technologies to collect data about your browsing behavior and preferences.</li>
          </ul>

          <h3 className="text-xl font-medium mb-1">3. Information from Third Parties</h3>
          <p className="text-gray-700 mb-3">
            We may receive information about you from third parties, such as social media platforms, when you connect your account or interact with our services through those platforms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-3">How We Use Your Information</h2>
          <p className="text-gray-700 mb-3">
            KeeDriver uses your information for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>Providing Services: To manage your account, process bookings, and offer customer support.</li>
            <li>Improving Services: To personalize your experience, understand how you use our services, and improve our offerings.</li>
            <li>Marketing: To send promotional communications, updates, and special offers, with your consent where required.</li>
            <li>Safety and Security: To protect our users, prevent fraud, and ensure the security of our platform.</li>
            <li>Legal Compliance: To comply with legal obligations, enforce our terms, and respond to legal requests.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-3">How We Share Your Information</h2>
          
          <h3 className="text-xl font-medium mb-1">1. With Service Providers</h3>
          <p className="text-gray-700 mb-3">
            We may share your information with third-party service providers who assist us in providing and improving our services. These providers are contractually obligated to keep your information confidential and secure.
          </p>

          <h3 className="text-xl font-medium mb-1">2. Legal Disclosures</h3>
          <p className="text-gray-700 mb-3">
            We may disclose your information if required by law or in response to legal processes, such as court orders, subpoenas, or government requests.
          </p>

          <h3 className="text-xl font-medium mb-1">3. Business Transfers</h3>
          <p className="text-gray-700 mb-3">
            In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.
          </p>

          <h3 className="text-xl font-medium mb-1">4. With Your Consent</h3>
          <p className="text-gray-700 mb-3">
            We may share your information with third parties when you have provided your explicit consent to do so.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-3">Your Choices and Obligations</h2>

          <h3 className="text-xl font-medium mb-1">1. Data Retention</h3>
          <p className="text-gray-700 mb-3">
            We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h3 className="text-xl font-medium mb-1">2. Access and Control</h3>
          <p className="text-gray-700 mb-3">
            You can access, update, or delete your personal information through your account settings. If you wish to deactivate your account or request that we no longer use your information, please contact us at [Insert Contact Information].
          </p>

          <h3 className="text-xl font-medium mb-1">3. Your Rights</h3>
          <p className="text-gray-700 mb-3">
            Depending on your location, you may have the right to access, rectify, delete, or restrict the use of your personal information. You may also have the right to object to the processing of your data or request data portability.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-3">Security</h2>
          <p className="text-gray-700 mb-3">
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration. However, please note that no method of transmission over the internet or method of electronic storage is completely secure.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-3">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-3">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>


      </div>
      
    </main> 
  )
}

