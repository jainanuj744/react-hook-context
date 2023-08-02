import { useContext } from "react";
import Parent_context from "./Parent_context";
import { FamilyContext } from "./FamilyContext";

export default function Family_context(){

   let c = useContext(FamilyContext);

    return(
        <div className="family_context">
        {c.familyName}
        I am Family context
        <Parent_context></Parent_context></div>
    )
}