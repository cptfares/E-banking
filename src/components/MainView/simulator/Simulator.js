import React,{useState} from 'react';
import DiscreteSlider from "./Slider";
import slider from "./Slider"

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




  const loans={
    ind1:{
      name:"dar",
      maxduration:"10 ans",
      value:"20%",
      initvalue:"30%"


    },
    ind2:{
      name:"karhba",
      maxduration:"10 ans",
      value:"70%",
      initvalue:"30%",
      varibles:["value","revune"]


    },
    ind3:{
      name:"mchrou3",
      maxduration:"10 ans",
      value:"70%",
      initvalue:"30%"


    },
    pro1:{
      name:"dar",
      maxduration:"10 ans",
      value:"200%",
      initvalue:"30%"


    },
    pro2:{
      name:"karhba",
      maxduration:"10 ans",
      value:"700%",
      initvalue:"30%"


    },
    pro3:{
      name:"mchrou3",
      maxduration:"20 ans",
      value:"70%",
      initvalue:"30%"


    },
    pro4:{
      name:"tayara",
      maxduration:"200 ans",
      value:"70%",
      initvalue:"30%"


    }
  }
  const [toggleState,setToggleState]=useState("ind");
  const [loanState,setloanState]=useState("ind1");
  const [durationState,setdurationState]=useState(0);


  const toggleUser =(para)=>{
    setToggleState(para)
    console.log(durationState)

  }
  const onchange = (data) => {
    setdurationState(data)
    console.log( data);
}
  const choiceloan=(para)=>{
    
    setloanState(para)
    console.log(loanState)

  }


  const forInd=(
    <div className="typeLoans" >
      <div className={loanState==="ind1"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("ind1")}     >
  <div className="card-body1">
    <img src={loan1}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className={loanState==="ind2"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("ind2")}    >
  <div className="card-body1">
    <img src={loan2}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className={loanState==="ind3"?  "card loan loanActive ":"loan card" }  onClick={()=>choiceloan("ind3")}   >
  <div className="card-body1">
    <img src={loan3}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>

    </div>

  )
  const forPro=(
    <div className="typeLoans" >
          <div className={loanState==="pro1"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("pro1")}     >
  <div className="card-body1">
    <img src={loan1}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className={loanState==="pro2"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("pro2")}   >
  <div className="card-body1">
    <img src={loan2}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className={loanState==="pro3"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("pro3")}    >
  <div className="card-body1">
    <img src={loan3}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
<div className={loanState==="pro4"?  "card loan loanActive ":"loan card" } onClick={()=>choiceloan("pro4")}    >
  <div className="card-body1">
    <img src={loan4}  ></img>
  
    <h1>professionel</h1>

  </div>
</div>
    </div>

  )



  return (
    <div style={{ backgroundColor: "white"}} >
      <div className="container" >
        <div className="agents" >
        <div className={toggleState==="ind"?"card ind ":"card"}onClick={()=>toggleUser("ind")}    >
  <div className="card-body1">
    <img src={toggleState==="ind"?user1:user2}  ></img>
  
    <h1 style={{color:toggleState==="ind"?"white":"red"}} >individulas</h1>

  </div>
</div>
<div className={toggleState==="pro"?"card ind ":"card"}onClick={()=>toggleUser("pro")}    >
  <div className="card-body1">
    <img src={toggleState==="pro"?pro2:pro1}  ></img>
  
    <h1 style={{color:toggleState==="pro"?"white":"red"}} >professionel</h1>

  </div>
</div>

</div>


<div  >
  {toggleState==="pro"?forPro:forInd}


  
</div>
<div className="details" >
  <h1 >{loans[loanState].name}:</h1> <p>Maximum Duration:<span style={{fontWeight:'bold'}} >{loans[loanState].value}</span></p>  <p>Maximum Duration:<span style={{fontWeight:'bold'}} >{loans[loanState].maxduration}</span></p>  <p>Maximum Duration:<span style={{fontWeight:'bold'}} >{loans[loanState].initvalue}</span></p>
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
<div class="col" style={{display:"flex",justifyContent:"center"}} >
<DiscreteSlider onchange={(e)=>{onchange(e)}} data={durationState} />

</div>



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