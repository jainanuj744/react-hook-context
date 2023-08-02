import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";

export default function Child({info}) {
  return (
    <div className="child">
      I am Child
      <GrandDaughter info={info}></GrandDaughter>
      <GrandSon info={info}></GrandSon>
    </div>
  );
}
