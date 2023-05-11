async function saveUser() {
    alert("Usuario registrado");
    //Create your Parse Object
    const user = new Parse.Object("Users");



    //Define its attributes
    user.set("Nombre",document.getElementById('firstName').value);
    user.set("Apellido",document.getElementById('lastName').value);
    user.set("Email",document.getElementById('email').value);
    user.set("Telefono",document.getElementById('phone').value);
    user.set("Localidad",document.getElementById('country').value);
    user.set("Provincia",document.getElementById('state').value);
    user.set("CodPostal",document.getElementById('zip').value);
    user.set("Direccion",document.getElementById('direccion').value);

   
    try{
        //Save the Object
        let result = await user.save()
        console.log(result);
    }catch(error){
        console.log(error);
    }
}


