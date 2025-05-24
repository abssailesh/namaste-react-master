import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
        Something went wrong. Please try again later.
      </p>
      <h4 className="text-md text-gray-500">
        {err.status} : {err.statusText || "Unknown Error"}
      </h4>
    </div>
  );
};

export default Error;
