import { useContext } from "react";
import Child_context from "./Child_context";
import { FamilyContext } from "./FamilyContext";

export default function Parent_context(){
    let b = useContext(FamilyContext);
    return(
        <div className="parent_context">
        {b.onlyForParents()}
        I am Parent context
        <Child_context></Child_context></div>
    )
}