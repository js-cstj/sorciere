import histoire from "./histoire.js";

export default class App {
    static main() {
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
        
        // this.article();
        // this.statistiques();
        // this.inventaire();
        // this.ennemis();
        // this.evenements();
    }
    
    static article() {
        var element = document.querySelector("article p");
        element.innerHTML = histoire.article.paragraphe;
        this.figure();
    }
    
    static figure() {
        var figure = document.querySelector("article figure");
        if (!histoire.article.image) {
            figure.style.display = "none";
        } else {
            figure.style.width = histoire.article.image.largeur + "px";
            var image = figure.querySelector("img");
            image.src = histoire.article.image.url;
            var legende = figure.querySelector("figcaption");
            legende.innerHTML = histoire.article.image.legende;
        }
    }
    
    static statistiques() {
        //HABILETE
        var valeur = document.querySelector("#habilete > span.valeur");
        valeur.innerHTML = histoire.stats.habilete.valeur;
        var valeur = document.querySelector("#habilete > span.max");
        valeur.innerHTML = histoire.stats.habilete.max;
        //ENDURANCE
        var valeur = document.querySelector("#endurance > span.valeur");
        valeur.innerHTML = histoire.stats.endurance.valeur;
        var valeur = document.querySelector("#endurance > span.max");
        valeur.innerHTML = histoire.stats.endurance.max;
        //CHANCE
        var valeur = document.querySelector("#chance > span.valeur");
        valeur.innerHTML = histoire.stats.chance.valeur;
        var valeur = document.querySelector("#chance > span.max");
        valeur.innerHTML = histoire.stats.chance.max;
    }
    
    static inventaire() {
    //INVENTAIRE
        var objets = document.querySelectorAll("#inventaire>.objet");
        objets[0].querySelector(".label").innerHTML = histoire.inventaire[0].item;
        objets[0].querySelector(".quantite").innerHTML = histoire.inventaire[0].quantite;
        objets[0].querySelector(".icone").src = histoire.inventaire[0].icone;
        objets[1].querySelector(".label").innerHTML = histoire.inventaire[1].item;
        objets[1].querySelector(".quantite").innerHTML = histoire.inventaire[1].quantite;
        objets[1].querySelector(".icone").src = histoire.inventaire[1].icone;
    }
    
    static ennemis() {
        //ENNEMIS
        var ennemis = document.querySelectorAll("#ennemis>.ennemi");
        ennemis[0].querySelector(".label").innerHTML = histoire.ennemis[0].ennemi;
        ennemis[0].querySelector(".icone").src = histoire.ennemis[0].icone;
        ennemis[1].querySelector(".label").innerHTML = histoire.ennemis[1].ennemi;
        ennemis[1].querySelector(".icone").src = histoire.ennemis[1].icone;
    }
    
    static evenements() {
        //EVENEMENTS
        var evenements = document.querySelectorAll("#evenements>.evenement");
        evenements[0].querySelector(".label").innerHTML = histoire.evenements[0].evenement;
        evenements[0].querySelector(".icone").src = histoire.evenements[0].icone;
    }
    static init() {
        window.addEventListener("load", e => {
            this.main();
        });
    }
}
App.init();