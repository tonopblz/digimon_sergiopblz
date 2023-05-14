function getRandomDigimon() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            const randomDigimon = data[Math.floor(Math.random() * data.length)];
            displayDigimon(randomDigimon);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayDigimon(digimon) {
    const digimonInfo = document.getElementById('digimon-info');
    digimonInfo.innerHTML = `
    <div class="card card-body bg-light.bg-gradient col-sm-3 mt-5">
        <h2>${digimon.name}</h2>
        <p>Level: ${digimon.level}</p>
        <img src="${digimon.img}" alt="${digimon.name}">
    </div>
        `;
}

document.body.style.backgroundImage = "url('assets/img/fondomon.gif')";
document.body.style.backgroundPosition = "top center";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover"