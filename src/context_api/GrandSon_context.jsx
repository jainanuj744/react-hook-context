import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandSon_context(){

    let info = useContext(FamilyContext);
    return(
        <div className="grandSon_context">
        {info.onlyForGrandChildren()}
        I am GrandSon context</div>
    )
}