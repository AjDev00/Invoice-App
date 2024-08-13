import FirstItemList from "./FirstItemList";
import SecondItemList from "./SecondItemList";

export default function ItemList() {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <FirstItemList />
        {/* <SecondItemList /> */}
      </div>
    </div>
  );
}
