
//This is the script for rotating venti

document.getElementById("venti").addEventListener("click", function () {
    this.style.transform = "rotate(360deg)";
    setTimeout(() => {
        this.style.transition = "none"; // Übergang vorübergehend deaktivieren
        this.style.transform = "rotate(0deg)";
        // Erzwinge ein Reflow, damit der Browser die Änderung bemerkt
        this.offsetHeight; 
        this.style.transition = "transform 1s ease-in-out"; // Übergang wieder aktivieren
    }, 1000); // Zeit in Millisekunden, die der Übergang dauert

});



//end