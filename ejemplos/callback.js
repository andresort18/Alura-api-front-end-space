function dos () {
    console.log("dos")
    
}

function uno (dos) {
    console.log("uno")
    setTimeout(dos,2000)
    
}

setTimeout(() => uno(dos),5000);

const nombre = function (){
    console.log("nombre");
}

