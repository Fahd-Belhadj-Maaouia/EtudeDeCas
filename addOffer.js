function validerFormulaire(event) {
    event.preventDefault();

    const titre = document.getElementById("titre").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const dateDepart = new Date(document.getElementById("depart").value);
    const dateRetour = new Date(document.getElementById("retour").value);
    const prix = parseFloat(document.getElementById("prix").value.trim());

    let messages = [];

    if (titre.length < 3) {
        messages.push("Le titre doit contenir au moins 3 caractères.");
    }

    const destinationRegex = /^[a-zA-Z\s]{3,}$/;
    if (!destinationRegex.test(destination)) {
        messages.push("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
    }

    if (dateRetour <= dateDepart) {
        messages.push("La date de retour doit être ultérieure à la date de départ.");
    }

  
    if (isNaN(prix) || prix < 0) {
        messages.push("Le prix doit être un nombre positif.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n")); 
        return false; 
    }

    
    alert("Formulaire validé avec succès !");
    


    return true; 
}

document.getElementById("voyageForm").addEventListener("submit", validerFormulaire);
