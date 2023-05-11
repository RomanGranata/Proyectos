
function getOption() {
    let ticket = 200;
    var categoria = document.getElementById("Categoria").value;
    var cantidad = document.getElementById("Cantidad").value; 
    var resultado; 
    
    switch (categoria) {
            case "estudiante":
             resultado = (ticket*20)/100 * cantidad;
            break;
            case "trainee": 
             resultado = (ticket*50)/100 * cantidad;
            break;
            case "junior" : 
            resultado = (ticket*85)/100 * cantidad;
            break;

        default:
            break;
    }
    console.log("resultado ",resultado)
document.getElementById("total").innerText = "Total a Pagar:    " + resultado;

}






