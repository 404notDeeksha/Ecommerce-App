import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const Privacy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Notice</h1>
        
        <div className="space-y-6 text-sm">
          <p>
            Your privacy is important to us. This privacy notice explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-bold">Information We Collect</h2>
          <p>
            We collect information that you provide to us when creating an account, placing an order, or contacting us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and email address</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (note: we do not store actual payment details)</li>
            <li>Order history and preferences</li>
          </ul>

          <h2 className="text-xl font-bold">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support</li>
            <li>Improve our services and user experience</li>
            <li>Communicate with you about your account and orders</li>
          </ul>

          <h2 className="text-xl font-bold">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-bold">Third-Party Services</h2>
          <p>
            We may share your information with third-party service providers who assist us in operating our website and conducting our business. These parties are obligated to maintain the confidentiality of your information.
          </p>

          <h2 className="text-xl font-bold">Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
          </p>

          <h2 className="text-xl font-bold">Demo Project Notice</h2>
          <p className="bg-yellow-50 p-4 border border-yellow-200 rounded">
            <strong>Important:</strong> This is a demo project only for educational purposes. 
            No real payments are processed, and no actual orders are fulfilled. 
            Please do not use real personal information or credit card details when using this application.
            <br /><br />
            Any data you enter is for demonstration purposes only and may be cleared at any time.
          </p>

          <h2 className="text-xl font-bold">Changes to This Policy</h2>
          <p>
            We may update this privacy notice from time to time. Any changes will be posted on this page.
          </p>

          <div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4">Related Links</h2>
            <div className="flex flex-col gap-2 text-[#0066c0]">
              <Link to={routes.aboutUs} className="hover:underline">
                About Us
              </Link>
              <Link to={routes.terms} className="hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4">GitHub Repository</h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Frontend:</strong>{" "}
                <a 
                  href="https://ecommerce-app-techwithdeekksha.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0066c0] hover:underline"
                >
                  https://ecommerce-app-techwithdeekksha.vercel.app
                </a>
              </p>
              <p>
                <strong>Backend:</strong>{" "}
                <a 
                  href="https://ecommerce-dep-techwithdeekksha.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0066c0] hover:underline"
                >
                  https://ecommerce-dep-techwithdeekksha.vercel.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
