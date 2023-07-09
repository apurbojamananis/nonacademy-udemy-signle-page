import { FaChevronDown, FaFile, FaShare, FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { useState } from "react";
const Header = () => {
  const [isVisible, setIsvisible] = useState(false);

  const handleVisible = () => {
    setIsvisible(!isVisible);
  };

  return (
    <section className="px-5 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center py-5">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt=""
            className="w-24 border-r-[1px] pr-5 border-gray-500"
          />

          <h3 className="pl-5">
            Python Coding Projects Build a Web App Directory Discovery
          </h3>
        </div>
        <div className="flex items-center gap-5">
          <div className="tooltip tooltip-bottom" data-tip="0 of 22 complete.">
            <div className="flex items-center gap-2">
              <div className="">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt=""
                  className="w-10 rounded-[50%]"
                />
              </div>
              <p>Your Progress</p>
              <FaChevronDown></FaChevronDown>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-white px-3 py-1">
              Share <FaShare></FaShare>
            </button>
            <button
              className="flex items-center gap-2 border border-white px-3 py-2"
              onClick={handleVisible}
            >
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </button>
            {isVisible && (
              <div className="bg-DarkBlue text-white px-5 py-5 absolute right-5 top-[68px]">
                <p className="flex items-center gap-2">
                  <FaStar></FaStar> Favorite this Course
                </p>
                <p className="flex items-center gap-2 my-2">
                  <FaFile></FaFile> Archive this Course
                </p>
                <hr />
                <p className="flex items-center gap-2 my-2">
                  <GrCheckbox className="bg-white"></GrCheckbox> New
                  announcement emails
                </p>
                <p className="flex items-center gap-2 ">
                  <GrCheckbox className="bg-white"></GrCheckbox> Promotional
                  Emails
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
