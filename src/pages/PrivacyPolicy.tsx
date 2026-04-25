import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy | Shashwat Holidays</title>
        <meta name="description" content="Official Privacy Policy of Shashwat Holidays." />
      </Helmet>

      <div className="site-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-display font-black text-gray-900 tracking-tight mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
            <p>
              This privacy policy is an electronic record in the form of an electronic contract formed under the information technology act, 2000 and the rules made there under and the amended provisions pertaining to electronic documents / records in various statutes as amended by the information technology act, 2000. This privacy policy does not require any physical, electronic or digital signature.
            </p>

            <p>
              Shashwat Holidays and its affiliates and Associate Companies is/are concerned about the privacy of the data and information of users (including sellers and buyers/customers whether registered or non-registered), offering, selling or purchasing products or services on websites, mobile sites or mobile applications (“Website”) on the Website and otherwise doing business with us. “Associate Companies” here shall have the same meaning as ascribed in Companies Act, 2013.
            </p>

            <p>
              This Privacy Policy is a contract between you and the respective entity whose website you use or access or you otherwise deal with. This Privacy Policy shall be read together with the respective Terms Of Use or other terms and condition of the respective entity and its respective website or nature of business of the Website.
            </p>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Collection of Personally Identifiable Information</h2>
              <p>
                We collect information from you when you place an order or subscribe to our website. When ordering or registering on our site, as appropriate, you may be asked to enter your:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name</li>
                <li>E-mail address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Credit card information</li>
              </ul>
              <p className="mt-4">
                Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. The information we learn from customers helps us personalize and continually improve your experience of shopping from our web store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Use of Demographic / Profile Data</h2>
              <p>
                We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses.
              </p>
              <p>
                We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates.
              </p>
              <p>
                In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our user’s activity on our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Cookies</h2>
              <p>
                Yes, Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow it) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>We use cookies to help us remember and process the items in your shopping cart.</li>
                <li>The cookies do not contain any of your personally identifiable information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Sharing of Personal Information / Sensitive Data</h2>
              <p>
                Your providing the Information to Shashwat Holidays and it’s consequent storage, collection, usage, transfer, access or processing of the same shall in violation of any third party agreement, laws, charter documents, judgments, orders and decrees.
              </p>
              <p>
                We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.
              </p>
              <p>
                Shashwat Holidays does not collect sensitive personal data or information, except where such collection is necessary to provide specific services, fulfill a stated purpose, or comply with lawful requirements associated with the functions or activities of Shashwat Holidays.
              </p>
              <p>
                Users may browse or search the Shashwat Holidays Platform without providing any personal information. However, certain services on the Platform may require users to share specific personal information in order to be availed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Security Precautions</h2>
              <p>
                We strive to ensure the security of your Personal Information and to protect your personal information against unauthorized access or unauthorized alteration, disclosure or destruction. Whenever you change or access your account information, we offer the use of a secure server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Choice/Opt-Out</h2>
              <p>
                We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.
              </p>
              <p>
                If we decide to change our privacy policy, we will post those changes on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Permissions</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Identity:</strong> The identity permission allows the app to access all saved account on your device, as well as access and change your personal information stored on the device. By account we mean everything you will see if you go to Settings &gt; Accounts.
                </li>
                <li>
                  <strong>SMS:</strong> Under certain circumstances, we may send you emails and SMS messages when we feel we have an important announcement to share regarding your Service. Please note that your carrier may charge you to receive messages via SMS.
                </li>
                <li>
                  <strong>Photos/Media/Files:</strong> Apps usually request Media and Photos permission when it needs External File Storage (either Internal or External) for storing some data, or for some features like sharing images etc.
                </li>
                <li>
                  <strong>Camera and microphone:</strong> It needs access to camera in order for you to post pictures of products without the picture have being stored prior to posting. The microphone would be needed for voice search.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Children’s Information</h2>
              <p>
                Our website is accessible to the general public. We do not knowingly collect, process, or store personal data of children below 18 years of age (as defined under applicable Indian law) without the consent of a parent or lawful guardian. We do not knowingly solicit or collect personal information from children under the age of 13 and use of our Platform is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872. If you are under the age of 18 years then you must use our Platform or services under the supervision of your parent, legal guardian or any responsible adult.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Your Approval</h2>
              <p>
                By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy.
              </p>
              <p>
                If we decide to change our privacy policy, we will post those changes on this page.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Contact Us</h2>
              <p>
                If there are any questions regarding this privacy policy you may contact us using the information on our contact page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
