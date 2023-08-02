import Child from "./Child";

export default function Parent({info}) {
  return (
    <div className="parent">
    <h2>{info.onlyForParents()}</h2>
    <br />
      I am Parent
      <Child info={info}></Child>
    </div>
  );
}
