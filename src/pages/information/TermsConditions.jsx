import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const TermsConditions = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <div className="space-y-6 text-sm">
          <p>
            Please read these terms and conditions carefully before using our e-commerce platform.
          </p>

          <h2 className="text-xl font-bold">Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl font-bold">Use License</h2>
          <p>
            This is a demo project for educational purposes. You are permitted to use this application to learn and understand e-commerce web development. You may not use this project for any commercial purposes.
          </p>

          <h2 className="text-xl font-bold">User Account</h2>
          <p>
            When you create an account on our platform, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h2 className="text-xl font-bold">Orders and Payments</h2>
          <p>
            All orders placed through this platform are for demonstration purposes only. No actual products will be shipped, and no actual payments will be processed.
          </p>

          <h2 className="text-xl font-bold">Product Information</h2>
          <p>
            We strive to provide accurate product descriptions and images. However, we cannot guarantee that all information is complete or error-free.
          </p>

          <h2 className="text-xl font-bold">Disclaimer</h2>
          <p>
            This website is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to this website or the information and materials provided on this website.
          </p>

          <h2 className="text-xl font-bold">Limitation of Liability</h2>
          <p>
            We will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any direct, indirect, special, or consequential loss.
          </p>

          <h2 className="text-xl font-bold">Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to logos, images, text, and code, is the property of the project creator and is protected by copyright laws.
          </p>

          <h2 className="text-xl font-bold">Demo Project Notice</h2>
          <p className="bg-yellow-50 p-4 border border-yellow-200 rounded">
            <strong>Important:</strong> This is a demo project only for educational purposes. 
            No real payments are processed, and no actual orders are fulfilled. 
            Please do not use real personal information or credit card details when using this application.
            <br /><br />
            The project owner shall not be liable for any damages arising from the use of this demo application.
          </p>

          <h2 className="text-xl font-bold">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>

          <div className="mt-8 pt-6 border-t">
            <h2 className="text-xl font-bold mb-4">Related Links</h2>
            <div className="flex flex-col gap-2 text-[#0066c0]">
              <Link to={routes.aboutUs} className="hover:underline">
                About Us
              </Link>
              <Link to={routes.privacy} className="hover:underline">
                Privacy Policy
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
