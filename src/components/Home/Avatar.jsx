import { useContext, useEffect } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import avatar from "../../assets/image-avatar.jpg";
import { AppContext } from "../../App";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";

export default function Avatar() {
  const { toggle, setToggle } = useContext(AppContext);

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <div className="flex flex-row gap-6 justify-center items-center pr-6 md:flex-col md:pb-7">
      <div onClick={() => setToggle(!toggle)}>
        {!toggle ? (
          <div className="md:border-b border-white border-opacity-10 md:w-16">
            <img
              src={moon}
              alt=""
              className="border-r border-white p-6 border-opacity-10 cursor-pointer md:border-r-0 md:border-0 md:p-0 md:ml-5 md:mb-4"
            />
          </div>
        ) : (
          <div className="md:border-b border-white border-opacity-10 md:w-16">
            <img
              src={sun}
              alt=""
              className="border-r border-white p-6 border-opacity-10 cursor-pointer md:border-r-0 md:border-0 md:p-0 md:ml-5 md:mb-4"
            />
          </div>
        )}
      </div>
      <div>
        <img src={avatar} alt="" className="rounded-full w-7" />
      </div>
    </div>
  );
}
