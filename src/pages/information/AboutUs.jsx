import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1000px] mx-auto py-10 px-6" role="main" aria-labelledby="about-us-title">
        <h1 id="about-us-title" className="text-3xl font-bold mb-6">About Us</h1>
        
        <div className="space-y-6 text-sm">
          <p>
            Welcome to our e-commerce platform! We are dedicated to providing you with a seamless online shopping experience.
          </p>

          <h2 className="text-xl font-bold">Our Mission</h2>
          <p>
            Our mission is to bring the best products to our customers with convenience and reliability. We strive to create a user-friendly platform that makes online shopping simple and enjoyable.
          </p>

          <h2 className="text-xl font-bold">Who We Are</h2>
          <p>
            We are a team of passionate developers and designers who believe in the power of e-commerce to transform the way people shop. Our platform is built with modern technologies to ensure speed, security, and reliability.
          </p>

          <h2 className="text-xl font-bold">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A wide range of products across various categories</li>
            <li>Secure and easy checkout process</li>
            <li>User account management</li>
            <li>Shopping cart functionality</li>
            <li>Product reviews and ratings</li>
          </ul>

          <h2 className="text-xl font-bold">Demo Project Notice</h2>
          <div className="bg-yellow-50 p-4 border border-yellow-200 rounded" role="alert">
            <p>
              <strong>Important:</strong> This is a demo project only for educational purposes. 
              No real payments are processed, and no actual orders are fulfilled. 
              Please do not use real personal information or credit card details when using this application.
            </p>
          </div>

          <h2 className="text-xl font-bold">Connect With Us</h2>
          <p>
            Feel free to explore our application and provide feedback. Your feedback helps us improve!
          </p>

          <section className="mt-8 pt-6 border-t" aria-labelledby="related-links-heading">
            <h2 id="related-links-heading" className="text-xl font-bold mb-4">Related Links</h2>
            <nav aria-label="Related links">
              <div className="flex flex-col gap-2 text-[#0066c0]">
                <Link to={routes.privacy} className="hover:underline">
                  Privacy Policy
                </Link>
                <Link to={routes.terms} className="hover:underline">
                  Terms and Conditions
                </Link>
              </div>
            </nav>
          </section>

          <section className="mt-8 pt-6 border-t" aria-labelledby="github-links-heading">
            <h2 id="github-links-heading" className="text-xl font-bold mb-4">GitHub Repository</h2>
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
          </section>
        </div>
      </main>
    </div>
  );
};
