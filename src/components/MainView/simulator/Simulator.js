import React from 'react';
import "./style1.css"
import user2 from  "./user.png";
import user1 from  "./user1.png";
import pro1 from  "./pro1.png";
import pro2 from  "./pro.png";
import loan1 from  "./loan1.png";
import loan2 from  "./loan2.png";
import loan3 from  "./loan3.png";
import loan4 from  "./loan4.png";



const Simulator = () => {

 let user=true
  return (
    <div style={{ backgroundColor: "white"}} >
      <div className="container" >
        <div className="agents" >
        <div className="card"   style={{backgroundColor:user? "EB001B":"white",color:user? "white":"EB001B" }} >
  <div className="card-body1">
    <img src={user?user2:user1}  ></img>
  
    <h1>individulas</h1>

  </div>
</div>

<div className="card"   style={{backgroundColor:user? "EB001B":"white",color:user? "white":"EB001B" }} >
  <div className="card-body1">
    <img src={user?pro1:pro2}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
</div>
<div className="typeLoans" >
<div className="card loan"    >
  <div className="card-body1">
    <img src={loan1}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className="card loan"   >
  <div className="card-body1">
    <img src={loan2}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className="card loan"    >
  <div className="card-body1">
    <img src={loan3}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className="card loan "    >
  <div className="card-body1">
    <img src={loan4}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>

  
</div>
<div className="details" >
  <h1  >bunsiness loan:</h1> <p>Maximum Duration:<span style={{fontWeight:'bold'}} >value</span></p>  <p>Maximum Duration:<span style={{fontWeight:'bold'}} >value</span></p>  <p>Maximum Duration:<span style={{fontWeight:'bold'}} >value</span></p>
</div>

<div className="form-section"  >
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
      <div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>
    <div class="col"><div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>
    <div class="col"><div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>
    <div class="col"><div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>
<div class="col">
      <div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>
<div class="col">
      <div className="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="amount"></input>
  <label for="floatingInput">amount</label>
</div></div>


</div>
</div>
  <div style= {{float:"right", padding:"0.5rem" }}  >
  <button className="btn btn-success" >apply</button>
</div>





</div>
</div>
</div>


        




  )
}

export default Simulator