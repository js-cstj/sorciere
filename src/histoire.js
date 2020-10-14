export default {
    nom: "Rita Raté",
    titre: "La Sorcière des Neiges",
    article: {
        numero: 212,
        paragraphe: "Le vent commence à se lever, vous projetant des paquets de neige au visage. Vous baissez la tête en avançant encore plus lentement. Un autre bruit se fait entendre alors entre les rafales de vent : le hurlement des loups ! Vous tirez votre épée, en essayant de distinguer quelque chose dans les tourbillons de neige. Comme s’ils venaient de nulle part, deux LOUPS DES NEIGES surgissent alors en face de vous. Ils sont totalement blancs, à l’exception de leurs yeux qui sont rouge sang. Soudain, l’un d’eux bondit sur vous. Vous les combattez chacun à son tour.",
        image: {
            url: "images/figures/212.png",
            largeur: 263,
            hauteur: 368,
            legende: "Deux Loups des Neiges surgissent alors en face de vous.",
        },
    },
    stats: {
        habilete: {
            valeur: 12,
            max: 13,
        },
        endurance: {
            valeur: 16,
            max: 17,
        },
        chance: {
            valeur: 11,
            max: 12,
        }
    },
    inventaire: [
        {
            item: "Provisions (repas)",
            quantite: 10,
            icone: "images/objet_provisions.svg"
        },
        {
            item: "Masse d'arme",
            quantite: 1,
            icone: "images/objet_masse.svg"
        }
    ],
    ennemis: [
        {
            ennemi: "Loup des Neiges 1",
            icone: "images/ennemi_loup.svg"
        },
        {
            ennemi: "Loup des Neiges 2",
            icone: "images/ennemi_loup.svg"
        },
    ],
    evenements: [
        {
            evenement: "Vous vous êtes gelé la main",
            icone: "images/evenement_gelee.svg"
        }
    ],
}