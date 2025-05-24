import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 border-b pb-2 text-blue-700">
        About Us
      </h1>
      <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
          <UserContext.Consumer>
            {({ loggedInUser }) => (<h2 className="text-lg font-semibold text-blue-700">Logged in as: {loggedInUser}</h2>)}
          </UserContext.Consumer>
      </div>

      <p className="mb-6 text-lg leading-relaxed">
        <span className="font-semibold">Namaste React</span> is a modern React application designed to demonstrate key concepts and patterns in React
        development. It focuses on building a responsive, interactive restaurant menu UI using best practices.
      </p>

      {/* Uncomment this if needed */}
      {/* <User name={"Akshay Saini (function)"} /> */}

      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <UserClass name={"Akshay Saini (Class)"} location={"Dehra Dun"} />
      </div>
    </div>
  );
};

export default About;
