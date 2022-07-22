import Lottie from "lottie-react";
import task from "../annimation/task.json"

const Header = () =>{
    return(<>
    <div class="container">
        <div class="row">
            <div class="col">
                <Lottie animationData={task}  loop={true} style={{height:"500px"}}/>;
            </div>
        </div>
    </div>
    </>)
}
export default Header;