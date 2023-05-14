fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        for (let temp of datos) {
            tabla(temp)
            // if(temp.id ==10{
            //     break
            // })
        }

    })

function tabla(temp) {
    let contenido = document.getElementById('contenido');
    contenido.innerHTML += `
    <div class="col-md-4">
    <div class="card card-flyer m-3 bg-light.bg-gradient" style="with: 18rem;">
    <div class="text-box">
        <img src="${temp.img}" class="img-fluid" alt="Responsive image">
        <div class="card-body">
            <div class="text-container">
                        <h5 class="card-title text-dark">${temp.name}</h5>
                        <p class="card-text text-dark">Nivel: ${temp.level}</p> 
                    </div>
                </div>    
            </div>
        </div>
    </div>`
}


    document.body.style.backgroundImage = "url('assets/img/fondomon.gif')";
    document.body.style.backgroundPosition = "top center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover"