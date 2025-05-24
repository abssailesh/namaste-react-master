const Contact = () => {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-blue-700 border-b pb-2">
          Contact Us
        </h1>
        <p className="mb-6 text-lg">
          Feel free to reach out to us via email or phone. We'd love to hear from you!
        </p>
  
        <div className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-sm">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600">support@namastereact.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">
              123 React Lane, JavaScript City, WebState 404001
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  