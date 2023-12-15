import NotFoundDog from "../assets/img/NotFoundDog.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="text-3xl font-extrabold mt-4 text-gray-800">
        Sorry, we couldn't find the page you're looking for.
      </div>
      <p className="text-lg text-gray-600 mt-2">
        The page you are searching for may have been moved or doesn't exist.
      </p>
      <p>
        Return to{" "}
        <a
          href="/Amazon-Clone-Project/"
          className="text-blue-500 hover:text-blue-700 underline text-lg mt-4"
        >
          Amazon's home page
        </a>
      </p>
      <div>
        <img src={NotFoundDog} alt="Page Not Found" className="w-64 h-48" />
      </div>
    </div>
  );
};

export default NotFound;
