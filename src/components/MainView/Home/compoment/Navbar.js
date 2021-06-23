import React from 'react'
import './style.css'
const Navbar = () => {
    return (
        <div >
            <nav class=" navbarTop navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active " href="#">Particuliers</a>
      <a class="nav-item nav-link" href="#">professionals</a>
    </div>
  </div>
</nav>
<nav class="navbar navbar-light bg-light"   >
         <div class="container-fluid">
            <a class="navbar-brand">E-BANKING</a>
         <div class="d-flex">            
        <button class="btn btn-success" type="submit">Devenir Client</button>
                <button class="btn btn-primary" > Accéder à mes comptes  </button>
         </div>
         </div>
        </nav>


        </div>

      


  

    )
}

export default Navbar
