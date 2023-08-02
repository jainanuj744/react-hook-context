import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandDaughter_context(){
    let a = useContext(FamilyContext);
    return(
        <div className="grandDaughter_context">
        {a.onlyForGrandChildren()}
        I am GrandDaughter context</div>
    )
}