const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

// asyn y await
async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        const card = document.querySelector("[data-ul]"); // mandamos a llamar el dato en forma de data-ul importante cuando usamos apis no usar ids

        datosImagenes.forEach(elemento => { // usamos un loop para repetir las imaganes y pasar por cada una de ellas e irlas asignando
          const contenido = `<li class="card">  
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `;   // asignamos una variable al ejemplo de html de como lo vamos a asignar y le integramos template strings para concatenar js con html
            card.innerHTML = card.innerHTML + contenido; // llamamos nuestra variable con la que llamamos al html para integrarla al mismo html + el cotendio js
        })
    }
    catch(error){
        console.log(error);
    }
}

//then y catch
/*function listaImagenes(){
    fetch(url) // fetch mas la url de la api
    .then( response => response.json()) //transforma el formato json de la api para aca en javascript
    .then(datosImagenes => { // mandamos a traer nuestros datos de la api
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]"); // mandamos a llamar el dato en forma de data-ul importante cuando usamos apis no usar ids

        datosImagenes.forEach(elemento => { // usamos un loop para repetir las imaganes y pasar por cada una de ellas e irlas asignando
          const contenido = `<li class="card">  
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `;   // asignamos una variable al ejemplo de html de como lo vamos a asignar y le integramos template strings para concatenar js con html
            card.innerHTML = card.innerHTML + contenido; // llamamos nuestra variable con la que llamamos al html para integrarla al mismo html + el cotendio js
        })
    
     })
     .catch(error => console.log(error)); // en caso tengamos un error .catch nos ayuda a localizar el error
}

listaImagenes(); */
listaImagenes();
