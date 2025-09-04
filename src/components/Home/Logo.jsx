import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div>
      <div className="border border-transparent bg-[#7C5DFA] p-5 rounded-tr-[20px] rounded-br-[20px] md:w-16 cursor-pointer group">
        <img src={logo} alt="" className="md:group-hover:animate-spin" />
      </div>
    </div>
  );
}
