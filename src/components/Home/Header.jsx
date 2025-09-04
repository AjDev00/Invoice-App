import Avatar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <div className="border border-transparent bg-[#373B53] flex flex-row justify-between h-[69px] items-center md:h-full md:flex-col md:items-start md:space-y-[400px] md:rounded-tr-[23px] md:rounded-br-[23px] md:fixed md:w-[65px]">
        <Logo />
        <Avatar />
      </div>
    </div>
  );
}
