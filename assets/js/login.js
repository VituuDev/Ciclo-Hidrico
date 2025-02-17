function validate() {

    let isValid = true;

    //Limpando as mensagens de erro de início
    document.getElementById("error-n").textContent = "";
    document.getElementById("error-e-mail").textContent = "";
    document.getElementById("error-password").textContent = "";

    //Pegando os dados dos formulários
    const firstname = document.getElementById("name").value.trim();
    const email = document.getElementById("e-mail").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitButton = document.querySelector("registrationForm");
    
    const errorMessage = document.getElementById(".msg");

    //Alertando o usuário que há campos em branco
    if(firstname === '' && email === '' && password === ''){
       errorMessage.textContent = "Você precisa inserir as informações.";
       errorMessage.classList = 'error';
    }
}