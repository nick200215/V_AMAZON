import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { ChangeEvent, useState } from "react";
import { handleInputChange, handleLogout } from "../../features/userSlice";

import { updateUser } from "../../services/user/updateUser";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const { email, unique_name, nameid } = useAppSelector((state) => state.user);

  const [newPassword, setNewPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleInputChange({ name, value }));
  };

  const handleChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewPassword(e.target.value);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const req = await updateUser({
        userName: unique_name,
        id: nameid,
        email: email,
        newPassword: newPassword,
      });
      console.log("req", req);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Update Your Information
        </h2>
        <div className="mb-6">
          <label htmlFor="unique_name" className="block text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="unique_name"
            name="unique_name"
            value={unique_name}
            onChange={handleChangeInput}
            className="w-full px-4 py-3 border-b-2 border-amazon-orange focus:outline-none text-gray-700 placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-600">
            E-Mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            className="w-full px-4 py-3 border-b-2 border-amazon-orange focus:outline-none  text-gray-700 placeholder-gray-400"
            placeholder="youremail@example.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="newPassword" className="block text-sm text-gray-600">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="w-full px-4 py-3 border-b-2 border-amazon-orange focus:outline-none text-gray-700 placeholder-gray-400"
            placeholder="********"
          />
        </div>
        <button
          onClick={handleSubmitForm}
          className="w-full py-3 px-6 bg-amazon-button text-xl text-white rounded-lg focus:outline-none"
        >
          Update
        </button>
      </form>
      <Link
        to="/Amazon-Clone-Project/signup"
        className="xl:hidden md:flex xs:flex text-lg  ml-4 mt-6 px-3 py-2 bg-amazon-link font-semibold  hover-bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          dispatch(handleLogout());
        }}
      >
        Sign Out
      </Link>
    </div>
  );
};

export default UserAccount;
