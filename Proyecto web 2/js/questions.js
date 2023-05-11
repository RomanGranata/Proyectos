async function saveQuestions() {
    alert("Pregunta nviada con exito!");
    //Create your Parse Object
    const questions = new Parse.Object("Questions");
    



     //Define its attributes
     questions.set("Nombre",document.getElementById('firstName').value);
     questions.set("Apellido",document.getElementById('lastName').value);
     questions.set("Email",document.getElementById('zip').value);
     questions.set("Telefono",document.getElementById('phone').value);
     questions.set("Consulta",document.getElementById('question').value);


     
    try{
        //Save the Object
        let result = await questions.save()
        console.log(result);
    }catch(error){
        console.log(error);
    }
} 