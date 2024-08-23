import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata =  {
    title: 'Terms and Conditions | Keedriver',
    description: 'Terms and Conditions Page',
}
  
export default function TermsConditions() {
  return (

    <main className="flex mx-auto">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-semibold mb-4 text-center">KeeDriver Terms and Conditions</h1>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
            Welcome to KeeDriver! These Terms and Conditions ("Terms") govern your use of our services, including our website, mobile application, and any other services provided by KeeDriver. By accessing or using our services, you agree to comply with these Terms. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">1. Using KeeDriver</h2>
          <p className="text-gray-700 mb-3">
            You agree to use KeeDriver's services in accordance with these Terms and all applicable laws. You may only use our services if you are legally eligible to enter into a binding contract with KeeDriver, and you are not barred from using our services under any applicable laws.
          </p>
          <p className="text-gray-700 mb-3">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately if you suspect any unauthorized use of your account.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">2. User Conduct</h2>
          <p className="text-gray-700 mb-3">
            You agree not to engage in any activity that:
          </p>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>Violates any applicable law, regulation, or third-party rights.</li>
            <li>Is harmful, fraudulent, deceptive, or misleading.</li>
            <li>Involves the transmission of unsolicited or unauthorized advertising or spam.</li>
            <li>Impersonates another person or entity, or falsely represents your affiliation with any person or entity.</li>
            <li>Interferes with or disrupts the integrity or performance of our services.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">3. Payment and Fees</h2>
          <p className="text-gray-700 mb-3">
            If you use any of KeeDriver's paid services, you agree to pay all applicable fees as described on our website. All payments are due immediately and are non-refundable, except as required by law or as stated in our refund policy.
          </p>
          <p className="text-gray-700 mb-3">
            KeeDriver reserves the right to change its fees at any time. If we do, we will provide advance notice of any fee changes. Your continued use of the paid services after the fee change becomes effective constitutes your agreement to pay the modified fees.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">4. Termination</h2>
          <p className="text-gray-700 mb-3">
            KeeDriver may suspend or terminate your account and access to our services at any time, with or without cause, and with or without notice. Upon termination, you lose the right to access or use our services, and all provisions of these Terms that should survive termination will do so, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-3">
            To the maximum extent permitted by law, KeeDriver is not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the services; (b) any unauthorized access to or use of our services; (c) any interruption or cessation of transmission to or from our services; (d) any bugs, viruses, trojan horses, or similar threats transmitted through our services by any third party; or (e) any conduct or content of any third party on the services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">6. Indemnification</h2>
          <p className="text-gray-700 mb-3">
            You agree to indemnify and hold harmless KeeDriver, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with (a) your access to or use of the services; (b) your violation of these Terms; or (c) your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">7. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-700 mb-3">
            These Terms and any disputes arising out of or relating to these Terms or our services are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in [Insert Jurisdiction], and you hereby consent to the jurisdiction of such courts.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">8. Changes to These Terms</h2>
          <p className="text-gray-700 mb-3">
            KeeDriver may update these Terms from time to time. We will notify you of any significant changes by posting the new Terms on our website and updating the "Effective Date" at the top of this page. Your continued use of our services after the changes take effect signifies your acceptance of the new Terms.
          </p>
        </section>
        
      </div>
      
    </main> 
  )
}

