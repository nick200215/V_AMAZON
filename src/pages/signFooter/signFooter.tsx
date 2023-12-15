import { Link } from "react-router-dom";

const SignData = [
  {
    title: "Conditions of use",
    link: "/Amazon-Clone-Project/",
  },
  {
    title: "Privacy notice",
    link: "/Amazon-Clone-Project/",
  },
  {
    title: "Help",
    link: "/Amazon-Clone-Project/",
  },
];

const SignFooter = () => {
  return (
    <div
      className="flex justify-center flex-col  w-[100%] border-t-2  "
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,.14), rgba(0,0,0,.03) 3px, transparent)",
      }}
    >
      <div className="flex justify-center flex-col gap-4 items-center mt-6 text-[11px]">
        <div className="flex gap-6 ">
          {SignData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-blue-800 font-medium hover:underline hover:text-amazon-orange"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <p> © 1996-2023, Amazon.com, Inc. or its affiliates </p>
      </div>
    </div>
  );
};

export default SignFooter;
