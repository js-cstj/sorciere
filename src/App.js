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
        
        this.article(histoire.article);
        this.statistiques(histoire.stats);
        this.inventaire(histoire.inventaire);
        this.ennemis(histoire.ennemis);
        this.evenements(histoire.evenements);
    }
    
    static article(article) {
        this.paragraphe(article.paragraphe);
        this.figure(article.image);
    }
    
    static paragraphe(texte) {
        var element = document.querySelector("article p");
        element.innerHTML = texte;
    }
    
    static figure(image) {
        var figure = document.querySelector("article figure");
        if (!image) {
            figure.style.display = "none";
        } else {
            figure.style.width = image.largeur + "px";
            var img = figure.querySelector("img");
            img.src = image.url;
            var legende = figure.querySelector("figcaption");
            legende.innerHTML = image.legende;
        }
    }
    
    static statistiques(stats) {
        //HABILETE
        var valeur = document.querySelector("#habilete > span.valeur");
        valeur.innerHTML = stats.habilete.valeur;
        var valeur = document.querySelector("#habilete > span.max");
        valeur.innerHTML = stats.habilete.max;
        //ENDURANCE
        var valeur = document.querySelector("#endurance > span.valeur");
        valeur.innerHTML = stats.endurance.valeur;
        var valeur = document.querySelector("#endurance > span.max");
        valeur.innerHTML = stats.endurance.max;
        //CHANCE
        var valeur = document.querySelector("#chance > span.valeur");
        valeur.innerHTML = stats.chance.valeur;
        var valeur = document.querySelector("#chance > span.max");
        valeur.innerHTML = stats.chance.max;
    }
    
    static inventaire(tInventaire) {
    //INVENTAIRE
        var objets = document.querySelectorAll("#inventaire>.objet");
        objets[0].querySelector(".label").innerHTML = tInventaire[0].item;
        objets[0].querySelector(".quantite").innerHTML = tInventaire[0].quantite;
        objets[0].querySelector(".icone").src = tInventaire[0].icone;
        objets[1].querySelector(".label").innerHTML = tInventaire[1].item;
        objets[1].querySelector(".quantite").innerHTML = tInventaire[1].quantite;
        objets[1].querySelector(".icone").src = tInventaire[1].icone;
    }
    
    static ennemis(tEnnemis) {
        //ENNEMIS
        var ennemis = document.querySelectorAll("#ennemis>.ennemi");
        ennemis[0].querySelector(".label").innerHTML = tEnnemis[0].ennemi;
        ennemis[0].querySelector(".icone").src = tEnnemis[0].icone;
        ennemis[1].querySelector(".label").innerHTML = tEnnemis[1].ennemi;
        ennemis[1].querySelector(".icone").src = tEnnemis[1].icone;
    }
    
    static evenements(tEvenements) {
        //EVENEMENTS
        var evenements = document.querySelectorAll("#evenements>.evenement");
        evenements[0].querySelector(".label").innerHTML = tEvenements[0].evenement;
        evenements[0].querySelector(".icone").src = tEvenements[0].icone;
    }
    static init() {
        window.addEventListener("load", e => {
            this.main();
        });
    }
}
App.init();