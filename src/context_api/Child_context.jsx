import GrandDaughter_context from "./GrandDaughter_context";
import GrandSon_context from "./GrandSon_context";

export default function Child_context(){
    return(
        <div className="child_context">I am child context
        <GrandDaughter_context></GrandDaughter_context>
        <GrandSon_context></GrandSon_context></div>
    )
}