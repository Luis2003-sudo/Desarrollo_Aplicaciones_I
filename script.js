const opciones = document.querySelectorAll(".opcion");
const botones = document.querySelectorAll(".btn");

opciones.forEach(function(opcion) {
    opcion.addEventListener("click", function(event) {
        const titulo = opcion.querySelector("h2").textContent;

        if (titulo === "Tareas") {
            event.preventDefault();

            document.querySelector("#tareas").scrollIntoView({
                behavior: "smooth"
            });
        } else if (titulo === "Login") {
            event.preventDefault();
            alert("Aquí irá el inicio de sesión.");
        }
    });
});

botones.forEach(function(boton) {
    boton.addEventListener("click", function(event) {
        if (boton.textContent === "Ver tareas") {
            event.preventDefault();

            document.querySelector("#tareas").scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});