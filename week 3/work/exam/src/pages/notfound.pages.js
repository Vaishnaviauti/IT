import Lottie from "lottie-react";
import pages from "../Annimation/page.json";
const Notfound = () =>{
    return(<>
        <div class="container">
        <div class="row">
          <div class="col">
          <Lottie animationData={pages} loop={true} />;
          </div>
          </div>
          </div>
    </>
    )
}
export default Notfound;