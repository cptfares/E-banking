import React from 'react'
import Navbar from './compoment/Navbar'
import hero from './hero.png'
import about from './about.png'
import access from './access.png'
import loan from './loan.png'
import investment from './investment.png'
import travel from './travel.png'
import frame from './Frame.png'
import FAQ from './compoment/FAQ';
import { useEffect,useState } from 'react';
import './compoment/style.css';



const Home = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'How can i join ?',
      answer:  `No results. \n \n Please try another search term.`,
      open: false
    },
    {
      question: 'Who to get loan?',
      answer: 'step 1.',
      open: false
    },
    {
      question: 'How to make a successful FAQ Page?',
      answer: 'This oaky many.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  const ColoredLine = () => (
    <hr
        style={{
            color: "red",
            backgroundColor: "red",
            height: 5
        }}
    />
);

  return(
  
    <div>
        <Navbar/>
        <div class="container-fluid"   >
        
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
            <div className="head"  >
            <ColoredLine  style={{with:"40px"}} /> <p>about us </p> <ColoredLine color="red" style={{with:"40px"}} />   


            </div>

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
          <div className="head"  >
            <ColoredLine  style={{with:"40px"}} /> <p>services</p> <ColoredLine color="red" style={{with:"40px"}} />   


            </div>
            <h1>what we do?</h1>
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
<div className="section-header" >
            <div className="head"  >
            <ColoredLine  style={{with:"40px"}} /> <p>services </p> <ColoredLine color="red" style={{with:"40px"}} />   


            </div>

            <h1>how it work  ?</h1>

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
        <div className="section-header" >
            <div className="head"  >
            <ColoredLine  style={{with:"40px"}} /> <p>FAQ </p> <ColoredLine color="red" style={{with:"40px"}} />   


            </div>

            <h1>find your question ?</h1>

          </div>
        
        <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
  
<footer class="page-footer font-small blue pt-4">



  <div class="container-fluid text-center text-md-left">

    <div class="row">


      <div class="col-md-6 mt-md-0 mt-3">

 
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>


      <hr class="clearfix w-100 d-md-none pb-3"/>


      <div class="col-md-3 mb-md-0 mb-3">

   
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>

      <div class="col-md-3 mb-md-0 mb-3">

 
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
   

    </div>
  

  </div>


  
  <div class="footer-copyright text-center py-3">© 2021Copyright:
    <a href="https://mdbootstrap.com/"> E-banking</a>
  </div>


</footer>

      


    </div>
  )
}

export default Home