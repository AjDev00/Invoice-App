import Avatar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <div className="border border-transparent bg-[#373B53] flex flex-row justify-between h-[69px] items-center">
        <Logo />
        <Avatar />
      </div>
    </div>
  );
}
