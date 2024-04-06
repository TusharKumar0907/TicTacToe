import { GrClose } from "react-icons/gr";
import { Fa0 } from "react-icons/fa6";

function Icon({name}) {
  if(name == "circle") {
    return <Fa0/ >
  } else if(name == "cross") {
    return <GrClose/ >
  }
}
  
export default Icon;