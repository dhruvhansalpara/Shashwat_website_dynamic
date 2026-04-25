import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export default function TermsOfServicePage() {
  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Terms & Conditions | Shashwat Holidays</title>
        <meta name="description" content="Company policies and terms of service for Shashwat Holidays." />
      </Helmet>

      <div className="site-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-display font-black text-gray-900 tracking-tight mb-8">
            Terms & <span className="text-brand-primary">Conditions</span>
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
            <section>
              <p>
                All information displayed, transmitted or carried on <strong>Shashwat Holidays</strong> is protected by copyright and other intellectual property laws.
              </p>
              <p>
                This site is designed, updated and maintained independently by <strong>Shashwat Holidays</strong>. The content is owned by <strong>Shashwat Holidays</strong>. You may not modify, publish, transmit, transfer, sell, reproduce, create derivative work from, distribute, repost, perform, display or in any way commercially exploit any of the content.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> disclaims all warranties or conditions, whether expressed or implied, (including without limitation implied, warranties or conditions of information and context). We consider ourselves and intend to be subject to the jurisdiction only of the courts of <strong>Rajkot, Gujarat, India</strong>.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> reserves the right, in its sole discretion, to suspend or cancel the service at any time if a computer virus, bug, or other technical problem corrupts the security, or proper administration of the service.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> Values the privacy of information pertaining to its associates. We do not use or disclose information about your individual visits to our website or any information that you may give us, such as your name, address, email address or telephone number, to any outside sources.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> reserves the right to refuse service to anyone at any time.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> will not use information about you without your permission and will provide the means for you to manage and control the information that you have provided. We will enable you to communicate your privacy concerns to us and that we will respond to them appropriately.
              </p>
            </section>

            <section>
              <p>
                <strong>Shashwat Holidays</strong> does not disclose any personal information to advertisers and for other marketing and promotional purposes that could be used to personally identify you, such as your password, credit card number and bank account number.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Force Majeure</h2>
              <p>
                If at any time during the continuance of any service the performance in whole or in part is prevented or delayed by reasons of a Force Majeure event, then from the date of occurrence of such event, there shall not be any claim against <strong>Shashwat Holidays</strong> for damages, or any liability against it, in respect of such non-performance or delayed performance.
              </p>
              <p className="mt-4">
                For the purposes of a service, Force Majeure means and includes any event due to any cause beyond the reasonable control of <strong>Shashwat Holidays</strong> including war, hostility, fires, floods, explosives, epidemics, quarantine restrictions, strikes, hartals, bandh, lock outs, compliance with orders or instructions of any court, statutory or governmental interventions or any other acts of State or God.
              </p>
            </section>

            <section className="text-sm text-gray-500 italic border-t pt-8">
              <p>By using our website or services, you acknowledge that you have read and understood these terms and agree to be bound by them.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
