document.getElementById("header").innerHTML=` <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="login.html">Funkopedia</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page"> Home <span class="visually-hidden">(current)</span></a>
          </li>          
          <li class="nav-item dropdown" id="CRUD">  
            <a class="nav-link dropdown-toggle" href="menuadmin" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administración</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="usuarios.html">Usuarios</a>
              </div>
          <li class="nav-item dropdown" id="Ingreso">  
            <a class="nav-link dropdown-toggle" href="menuadmin" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ingreso</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="login.html">Log in</a>
                  <a class="dropdown-item" href="registro.html">Registro</a>
              </div>
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>
`

if (sessionStorage.getItem("adm")!="1"){
  document.querySelector("#CRUD").setAttribute('style', 'display:none')
  //  document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
  document.querySelector("#CRUD").setAttribute('style', 'display:on')
  //  document.querySelector("#crud").setAttribute('style', 'display:on')
}
