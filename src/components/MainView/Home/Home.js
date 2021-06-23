import React from 'react'
import Navbar from './compoment/Navbar'
import hero from './hero.png'
import about from './about.png'
import access from './access.png'
import loan from './loan.png'
import investment from './investment.png'
import travel from './travel.png'
import frame from './Frame.png'


const Home = () => {
  const ColoredLine = () => (
    <hr
        style={{
            color: "red",
            backgroundColor: "red",
            height: 5
        }}
    />
);
const SectionHeader=({text})=>(
  <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
  }} >
    
    <ColoredLine  style={{with:"40px"}} /> <p>{text}</p> <ColoredLine color="red" style={{with:"40px"}} />   
  
  
  </div>


)
  return(
  
    <div>
        <Navbar/>
        <div class="container-fluid"  style={{margin:"0"}}  >
          <section className="hero" >
            <div className="left" >
              <h1>We Are The Next Generation of <span style={{color:"#FF493E"}} >banking</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.</p>
              <div class="d-flex">            
        <button class="btn btn-success " style={{marginLeft:"0"}}  type="submit">Get Started Now</button>
                <button class="btn btn-primary loanbtn " > Simulate your loan  </button>
         </div>
            </div>
            <div className="right" >
              <img src={hero}  ></img>
            </div>

          </section>
        <section className="about" >
          <div className="section-header" >
            <SectionHeader text={"about"} />
            <h1>who we are ?</h1>

          </div>
          <div className="content" >
            <div className="left" >
              <img src={about} ></img>
            </div>
            <div className="right" >
              <h1>We Are <span style={{color:"#FF0000"}} >Making banking Better</span>  For Everyone</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.

Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
              </p>
              <button class="btn btn-success " style={{marginTop:"2rem"}}  type="submit">Get Started Now</button>
            </div>

          </div>
          

        </section>
        <section className="services" >
          <div className="section-header" >
            <SectionHeader text={"about"} />
            <h1>how it work ?</h1>
          </div>
          <div className="content" >
          <div class="card" >
  <div class="card-body">
    <img src={access} ></img>
  
    <p class="card-text">aucibus feugiat rutrum aenean..</p>

  </div>
</div>
<div class="card" >
  <div class="card-body">
    <img src={loan} ></img>
  
    <p class="card-text">aucibus feugiat rutrum aenean..</p>

  </div>
</div>
<div class="card" >
  <div class="card-body">
    <img src={investment} ></img>
  
    <p class="card-text">aucibus feugiat rutrum aenean..</p>

  </div>
</div>
<div class="card" >
  <div class="card-body">
    <img src={travel} ></img>
  
    <p class="card-text">aucibus feugiat rutrum aenean..</p>

  </div>
</div>
 </div> 
</section>
<section className="HIW">
<div  >
            <SectionHeader text={"about"} />
            <h1>how it work ?</h1>
          </div>
          <div className="content" > 
          <div className="card-container" >

          <div class="card " >
            <div className="divstyle" style={{backgroundColor:"#582EFF"}}  ></div>
           <div class="card-body">
          <img src={investment} ></img>
  
          <p class="card-text">aucibus feugiat rutrum aenean..</p>

           </div>
          </div>
          <img className="frame"   src={frame} ></img>
          </div>
          <div className="card-container" >

<div class="card" >
<div className="divstyle" style={{backgroundColor:"#FF814A"}}   ></div>
 <div class="card-body">
<img src={investment} ></img>

<p class="card-text">aucibus feugiat rutrum aenean..</p>

 </div>
</div>
<img className="frame"   src={frame} ></img>
</div>
<div className="card-container" >

<div class="card" >
<div className="divstyle" style={{backgroundColor:"#31C5A1"}}   ></div>
 <div class="card-body">
<img src={investment} ></img>

<p class="card-text">aucibus feugiat rutrum aenean..</p>

 </div>
</div>

</div>

          
          
          
          </div>
  

</section>
        
        
        </div>

    </div>
  )
}

export default Home