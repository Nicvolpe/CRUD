const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            // esto es para el boton modificar +(location.search.substr(4)===""?'':"/")+location.search.substr(4)
            url: 'http://NicoV.pythonanywhere.com/usuarios' ,
            error: false,
            cargando: true,
            /*alta*/
            id: 0,
            usuario: "admin",
            clave: "admin",
            rol:1,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                   
                    console.log(this.usuarios)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
    eliminar(id) {
            const url = 'https://NicoV.pythonanywhere.com/usuarios/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol:this.rol
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./index.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })
        },
        modificar() {
              let usuario = {
                  usuario:this.usuario,
                  clave: this.clave,
                  rol: this.rol,
              }
              var options = {
                  body: JSON.stringify(usuario),
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  redirect: 'follow'
              }
              fetch(this.url, options)
                  .then(function () {               
                      alert("Registro modificado")
                      window.location.href = "./usuarios.html";  
                  })
                  .catch(err => {
                      console.error(err);
                      alert("Error al Modificar")
                  })      
          },
        
        login() {
            usuario=this.usuario
            sessionStorage.setItem("adm",0)
            var i=0
            while ( i < this.usuarios.length && this.usuarios[i].usuario != this.usuario  ){
                i++
            }
            if (i<(this.usuarios.length)){
                if (this.usuarios[i].clave==this.clave ){
                    if (this.usuarios[i].rol==1){
                        sessionStorage.setItem("adm",1)            
                    }
                    window.location.href = "./index.html";
                }else{
            /*        if (this.usuarios[i].rol==0){
                        sessionStorage.setItem("adm",0)
                    }
                    
                    window.location.href = "./index.html";
            */
                    alert('Clave erronea')
                }
            }else{
                alert('Usuario erronea')
            }
            
            /*for (elemento of this.usuarios){
                if (elemento.usuario == this.usuario && elemento.clave==this.clave ){
                    if (elemento.rol=1){
                        sessionStorage.setItem("adm",1)
                    }
                }   

            }*/


          
         
        }
    },
    created() {
        
        this.fetchData(this.url)




    },
}).mount('#app')


