import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import leftArrow from "../../assets/icon-arrow-left.svg";

export default function GoBack() {
  const history = useHistory();

  return (
    <div>
      <div>
        <div
          onClick={() => history.go(-1)}
          className="flex flex-row font-open-sans items-center gap-3 pt-2 cursor-pointer"
        >
          <div>
            <img src={leftArrow} alt="" className="h-4" />
          </div>
          <div className="font-bold tracking-wide">Go back</div>
        </div>
      </div>
    </div>
  );
}
