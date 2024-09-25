// Importation de l'objet histoire
import histoire from "./histoire.js";

export default class App {
    static main() {
        /////////////////////////////////////////////////////////////////////////////
        // Étape 1 : Récupérer les données brutes
        /////////////////////////////////////////////////////////////////////////////
        console.log(histoire.article.paragraphe);
        console.log(histoire.article.image);
        console.log(histoire.article.image.url);
        console.log(histoire.article.image.legende);
        console.log(histoire.stats.habilete.valeur);
        console.log(histoire.stats.habilete.max);
        console.log(histoire.stats.endurance.valeur);
        console.log(histoire.stats.endurance.max);
        console.log(histoire.stats.chance.valeur);
        console.log(histoire.stats.chance.max);
        console.log(histoire.inventaire[0].quantite);
        console.log(histoire.inventaire[0].item);
        console.log(histoire.inventaire[0].icone);
        console.log(histoire.inventaire[1].quantite);
        console.log(histoire.inventaire[1].item);
        console.log(histoire.inventaire[1].icone);
        console.log(histoire.ennemis[0].ennemi);
        console.log(histoire.ennemis[0].icone);
        console.log(histoire.ennemis[1].ennemi);
        console.log(histoire.ennemis[1].icone);
        console.log(histoire.evenements[0].evenement);
        console.log(histoire.evenements[0].icone);

        /////////////////////////////////////////////////////////////////////////////
        // Étape 2 : Parcourir le document HTML
        /////////////////////////////////////////////////////////////////////////////
        document.querySelector("article p").style.borderColor = "green";
        document.querySelector("article figure").style.borderColor = "green";
        document.querySelector("article figure img").style.borderColor = "green";
        document.querySelector("article figure figcaption").style.borderColor = "green";
        ["habilete", "endurance", "chance"].forEach((stat) => {
            document.querySelector(`#${stat} > span.valeur`).style.borderColor = "green";
            document.querySelector(`#${stat} > span.max`).style.borderColor = "green";
        });
        document.querySelectorAll("#inventaire .objet").forEach((objet) => {
            objet.querySelector(".label").style.borderColor = "green";
            objet.querySelector(".quantite").style.borderColor = "green";
            objet.querySelector(".icone").style.borderColor = "green";
        });
        document.querySelectorAll("#ennemis .ennemi").forEach((ennemi) => {
            ennemi.querySelector(".label").style.borderColor = "green";
            ennemi.querySelector(".icone").style.borderColor = "green";
        });
        document.querySelectorAll("#evenements .evenement").forEach((evenement) => {
            evenement.style.borderColor = "green";
            evenement.querySelector(".label").style.borderColor = "green";
            evenement.querySelector(".icone").style.borderColor = "green";
        });

        /////////////////////////////////////////////////////////////////////////////
        // Étape 3 : Placer les données dans le document HTML
        /////////////////////////////////////////////////////////////////////////////
        document.querySelector("article p").innerHTML = histoire.article.paragraphe;
        document.querySelector("article figure img").src = histoire.article.image.url;
        // document.querySelector("article figure img").style.borderColor = "green";
        document.querySelector("article figure figcaption").innerHTML = histoire.article.image.legende;
        ["habilete", "endurance", "chance"].forEach((stat) => {
            document.querySelector(`#${stat} > span.valeur`).innerHTML = histoire.stats[stat].valeur;
            document.querySelector(`#${stat} > span.max`).innerHTML = histoire.stats[stat].max;
        });
        document.querySelectorAll("#inventaire .objet").forEach((objet, i) => {
            objet.querySelector(".label").innerHTML = histoire.inventaire[i].item;
            objet.querySelector(".quantite").innerHTML = histoire.inventaire[i].quantite;
            objet.querySelector(".icone").src = histoire.inventaire[i].icone;
        });
        document.querySelectorAll("#ennemis .ennemi").forEach((ennemi, i) => {
            ennemi.querySelector(".label").innerHTML = histoire.ennemis[i].ennemi;
            ennemi.querySelector(".icone").src = histoire.ennemis[i].icone;
        });
        document.querySelectorAll("#evenements .evenement").forEach((evenement, i) => {
            evenement.querySelector(".label").innerHTML = histoire.evenements[i].evenement;
            evenement.querySelector(".icone").src = histoire.evenements[i].icone;
        });
        /////////////////////////////////////////////////////////////////////////////
        // Étape 4 : Nettoyer (version paresseux)
        /////////////////////////////////////////////////////////////////////////////
        document.querySelectorAll("[style]").forEach(element => {
            element.style.border = 'none';
        });
    }
}

