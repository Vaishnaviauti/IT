import Lottie from "lottie-react";
import exam from "../Annimation/exam.json"
const  Section = () => {
    
    return(<>
       <div class="container">
  <div class="row">
    <div class="col">
    <Lottie animationData={exam} loop={true} />;
    </div>
    <div class="col v-center">
        <div class="col">
      <p className="fs-2">Industrial Traning Weekly Test</p>
      <p className="fs-3">Instruction</p>
      <ul>
      <li><p className="h6">30 marks</p></li>
      <li><p className="h6">MCQ Type<br/></p></li>
      <li><p className="h6">Limited Time<br/></p><br/></li>
      </ul>
      <button  type="button" class="btn btn-primary m-2">Open Web-Dev Test</button>
      <br></br>
      <button type="button" class="btn btn-primary m-2">Open App-Dev Test</button>
    </div>
  </div>
</div>
</div>
    </>)
}
export default Section;
