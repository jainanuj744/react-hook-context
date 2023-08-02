import Parent from "./Parent";

export default function Family() {
    let familyInfo = {
        familyName : "Jains",
        onlyForParents : ()=>{
            return "Info for Parents";
        },
        onlyForGrandChildren : ()=>{
            return "Info for Grand Children";
        }
    }

  return (
    <div className="family">
      I am Family
      <Parent info={familyInfo}></Parent>
    </div>
  );
}
