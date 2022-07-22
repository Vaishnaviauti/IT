import img1 from "../image/vaishnavi.jfif"

const team = () =>{
    return(
    <>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" style={{width:"10rem",color:"black"}}>
                        <img src={img1} class="ccard-img-top" alt=" "/>
                        <div class="card-body">
                            <p class="card-text">Vaishnavi Auti</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>)                                
}
export default team;