import { useContext } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import avatar from "../../assets/image-avatar.jpg";
import { AppContext } from "../../App";

export default function Avatar() {
  const { toggle, setToggle } = useContext(AppContext);
  return (
    <div className="flex flex-row gap-6 justify-center items-center pr-6">
      <div onClick={() => setToggle(!toggle)}>
        {!toggle ? (
          <img
            src={moon}
            alt=""
            className="border-r border-white p-6 border-opacity-10 cursor-pointer"
          />
        ) : (
          <img
            src={sun}
            alt=""
            className="border-r border-white p-6 border-opacity-10 cursor-pointer"
          />
        )}
      </div>
      <div>
        <img src={avatar} alt="" className="rounded-full w-7" />
      </div>
    </div>
  );
}
