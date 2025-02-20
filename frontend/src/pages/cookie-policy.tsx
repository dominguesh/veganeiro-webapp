import React from 'react';
import Layout from '../components/layout/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Veganeiro LLC Cookie Policy</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-4">Effective Date: 01/20/2025</p>

          <p className="mb-6">
            At Veganeiro LLC, we use cookies and similar technologies to provide, improve, and personalize our services. This Cookie Policy explains what cookies are, how we use them, and your options regarding cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files stored on your device by websites you visit. They are widely used to enable website functionality, enhance user experience, and provide information to website owners.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p className="mb-6">Veganeiro LLC uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Essential Cookies: Enable basic website functionality, such as secure logins.</li>
            <li>Performance Cookies: Analyze site usage to improve functionality and user experience.</li>
            <li>Functional Cookies: Save your preferences, such as language settings or login details.</li>
            <li>Advertising and Analytics Cookies: Provide personalized content and measure the effectiveness of marketing campaigns.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Session Cookies</td>
                  <td className="py-2">Temporarily store information during your visit and are deleted once you close your browser.</td>
                  <td className="py-2">Maintaining logins during a session.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Persistent Cookies</td>
                  <td className="py-2">Remain on your device for a set period, enabling us to remember you for future visits.</td>
                  <td className="py-2">Storing language preferences</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Third-Party Cookies</td>
                  <td className="py-2">Provided by external services to track user activity across websites.</td>
                  <td className="py-2">Analytics and ad targeting.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
          <p className="mb-4">You can control or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our services.</p>
          
          <p className="font-semibold mt-4 mb-2">Common Options to Manage Cookies:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Browser Settings: Adjust cookie permissions in your browser preferences.</li>
            <li>Opt-Out Tools: Use tools like YourAdChoices or Network Advertising Initiative to opt-out of targeted ads.</li>
          </ul>
          
          <p className="mb-6">For more information on managing cookies, visit www.allaboutcookies.org.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Cookies</h2>
          <p className="mb-4">We work with third-party service providers (e.g., Google Analytics) to help us analyze website usage and optimize our services. These providers may set their own cookies, which are subject to their privacy policies.</p>
          
          <p className="font-semibold mt-4 mb-2">Key Third-Party Services We Use:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Google Analytics: Tracks usage patterns and site performance. For more details, visit Google's Privacy Policy.</li>
            <li>Advertising Partners: Deliver personalized content and ads.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates to This Policy</h2>
          <p className="mb-6">We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Effective Date."</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">If you have questions or concerns about our use of cookies, contact us at:</p>
          <p className="mb-6">Email: contact@veganeiro.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
