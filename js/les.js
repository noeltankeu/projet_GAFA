function getAnswerNumber() {

    let question = document.querySelector(".color-theme.font-600.font-20.top-10.bottom-20").innerText;

    /*let question = document.querySelector(".button.button-xl.button-full.round-small.shadow-huge.bottom-0").innerText;*/

    switch (true) {
        case localComparison(question, "Peut-on créer des groupes de discussion sur Ayoba?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel volume offre les forfaits MTN Home NoLimit?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel service MTN Mobile Money offre-t-il pour soutenir les entreprises?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel avantage MTN Mobile Money offre-t-il pour les étudiants?"):
            updateAnswer(1);
            break;

        case localComparison(question, "quel montant par mois vous donne droit au forfait 75Go+1h d'appel vers MTN"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel est l'influenceur(se) le(la) plus jeun(e) sur Ayoba?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la principale fonctionnalité d'un capteur d'empreintes digitales sur un smartphone?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Combien de jours les clients ont-ils pour payer leurs mensualités après s'être abonnés?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel est le code pour vérifier le solde de son compte MTN Mobile Money?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel partenariat MTN Cameroon a-t-il établi pour élargir sa gamme de smartphones?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Sur la chaine ayoba de muriel Blanche, on ne retrouve que des photos d'elles?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Est-il possible de bloquer temporairement son compte MTN Mobile Money via l'application?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quels sont les types d'informations disponibles sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Les appels effectués via Ayoba sont-ils gratuits?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel influenceur a le moins de followers sur Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Comment un client peut-il vérifier l'activation de son bonus?"):
            updateAnswer(1);
            break;

        case localComparison(question, "En quelle année Internet a-t-il été créé ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Qui a inventé les téléphones?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Comment Ayoba traite-t-elle l'actualité mondiale pour ses utilisateurs?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Qu'est-ce que la messagerie instantanée d'Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quelle est la mensualité pour le Samsung S24 Ultra 512 GB sur une période de 12 mois?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Que doit faire un client pour renouveler le bonus promotionnel de son smartphone?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Un moteur de recherche sert à trouver des pages Web"):
            updateAnswer(1);
            break;

        case localComparison(question, "Un client doit composer *189# tous les 30 jours pour payer les mensualités après le premier dépôt."):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle fonctionnalité de l'application MTN Mobile Money est idéale pour les voyageurs?"):
            updateAnswer(2);
            break;

        case localComparison(question, "L'application MTN Mobile Money offre-t- elle des notifications de transaction en temps réel?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle option Ayoba offre-t-elle pour les amateurs de sport?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle est la limite de taille pour l'envoi d'un fichier sur Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Comment Ayoba facilite-t-elle l'accès à l'information de santé pour les jeunes?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est un des avantages principaux de l'utilisation d'Ayoba par rapport à d'autres applications de messagerie?"):
            updateAnswer(1);
            break;

        case localComparison(question, "En quelle année le tout premier téléphone portable a-t-il été commercialisé?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Est-il possible de lier son compte MTN Mobile Money à un compte bancaire?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quels sont les téléphones qu'un client éligible peut acheter avec moins de 15.000 XAF grâce à MTN SmartPay?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la fonctionnalité qui permet à un smartphone de se connecter à Internet via un réseau Wi-Fi?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Comment Ayoba assure-t-elle la confidentialité des appels?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle fonctionnalité est spécifique aux smartphones haut de gamme vendus par MTN?"):
            updateAnswer(4);
            break;

        case localComparison(question, "C'est l'appli qui te permet de pronostiquer les Matchs des Championnats MTN Elite 1 & 2."):
            updateAnswer(4);
            break;

        case localComparison(question, "Que doit faire un client pour renouveler le bonus promotionnel de son smartphone?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Les boîtes actuelles des forfaits classiques MTN Home peuvent-elles être utilisées avec la nouvelle offre MTN Home?"):
            updateAnswer(3);
            break;

        case localComparison(question, "MTN Mobile Money permet-il le retrait d'argent dans une banque ?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quelle est la principale fonctionnalité d'un capteur d'empreintes digitales sur un smartphone?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la norme de connectivité sans fil utilisée pour le partage de fichiers entre smartphones?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quels sont les types d'informations disponibles sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Les contenus vidéos de Muriel Blanche n'ont jamais franchi la barre de 10 000 Likes sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Ayoba peut-elle être utilisée pour voter lors d'événements en direct?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Le téléphone du client est bloqué si la mensualité n'est pas payée à la date d'échéance."):
            updateAnswer(1);
            break;

        case localComparison(question, "MTN Mobile Money permet-il d'acheter des billets d'avion?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel montant par mois vous donne droit au forfait 75Go+1h d'appel vers MTN"):
            updateAnswer(3);
            break;

        case localComparison(question, "Est-il possible d'utiliser l'offre NoLimit avec n'importe Quelle Box?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Peut-on utiliser Ayoba pour suivre des émissions de télévision ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle entreprise développe le système d'exploitation Android?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle option Ayoba propose-t-elle pour soutenir l'apprentissage en ligne ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle option l'application MTN Mobile Money offre-t-elle pour améliorer l'expérience utilisateur?"):
            updateAnswer();
            break;

        case localComparison(question, "Quelle est la dernière version du système d'exploitation mobile du Iphone?"):
            updateAnswer(4);
            break;

        case localComparison(question, "RELèVE LE DEFI - JOUE ICI"):
            updateAnswer("rele");
            break;

        case localComparison(question, "Quelle est l'influenceuse la plus mature sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Sur Ayoba, tu peux acheter la musique"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle fonctionnalité Ayoba offre-t-elle en plus de la messagerie ?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle est la signification de l'acronyme MTN ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle application mobile les clients peuvent-ils utiliser pour gérer leur compte MTN Home NoLimit ?"):
            updateAnswer(2);
            break;

        case localComparison(question, "C'est la MicroApp qui te permet de lire les audios sur Ayoba"):
            updateAnswer(2);
            break;

        case localComparison(question, "Comment un client peut-il payer ses mensualités avec MTN SmartPay ?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Que signifie l’IA ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Peut-on utiliser Ayoba pour envoyer des messages à des non-utilisateurs ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "C'est quoi un Smartphone?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Le Samsung A03 Core est le seul modèle proposé aux clients de MTN MTN SmartPay."):
            updateAnswer(1);
            break;

        case localComparison(question, "Est-il possible de télécharger des sauvegardes de chat sur Ayoba ?"):
            updateAnswer(2);
            break;

        case localComparison(question, "C'est quoi Boomplay ?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Qui était la gagnante du concours Miss Ayoba 2023 ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Combien de continentais sont présents sur les réseaux sociaux?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Laquelle de ces plateformes n'est pas un navigateur ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Est-il possible d'utiliser l'offre NoLimit avec n'importe Quelle Box?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Peut-on utiliser Ayoba pour suivre des émissions de télévision ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la dernière version du système d'exploitation mobile du Iphone?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle option l'application MTN Mobile Money offre-t-elle pour améliorer l'expérience utilisateur?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle option Ayoba propose-t-elle pour soutenir l'apprentissage en ligne?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est le moyen de communication digitale le plus ancien et le plus universel?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel influenceur a le moins de followers sur Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel est le principal avantage de l'utilisation d'Ayoba pour les entreprises?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel type de fichier peut-on envoyer via Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Comment appelle-l'on une personne qui utilise l'Internet?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quels sont les réseaux sociaux les plus utilisés au Continent?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelles sont les mesures de sécurité recommandées pour protéger son compte MTN Mobile Money?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Qu'est-ce qu'un \"follower\"?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel genre de contenu peut-on trouver dans la section \"Discover\" d'Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est le service de messagerie instantanée le plus utilisé sur les smartphones?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Lequel de ces éléments est une IA?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel est le code USSD pour accéder à MTN Mobile Money?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Les utilisateurs d'Ayoba peuvent-ils       envoyer des messages auto-destructifs?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle fonctionnalité Ayoba offre-t-elle en plus de la messagerie ?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Laquelle de ces applications consomme le plus de data?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle caractéristique est souvent mise en avant dans les smartphones de milieu de gamme vendus par MTN Cameroon?"):
            updateAnswer(4);
            break;

        case localComparison(question, "C'est quoi l'Intelligence Artificielle ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle fonctionnalité d'Ayoba aide à promouvoir la culture sociale?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment l'application MTN Mobile Money aide-t-elle à gérer les dépenses?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est le format le plus couramment utilisé pour les cartes mémoire dans les smartphones?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel service MTN Mobile Money offre-t-il spécifiquement pour les paiements chez les commerçants?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment peut-on obtenir de l'aide en cas de problème avec MTN Mobile Money?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Qui est le concepteur des AirPods?"):
            updateAnswer(3);
            break;

        case localComparison(question, "En cas de déménagement, MTN Cameroon permet-il de transférer le service Internet à domicile vers une nouvelle adresse?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est le montant minimum qu'on peut envoyer via MTN Mobile Money?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel est le type d'actualité qui ne figure pas dans Africa News?"):
            updateAnswer(3);
            break;

        case localComparison(question, "L'application MTN Mobile Money inclut- elle un support client intégré ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "L'application MTN Mobile Money offre-t- elle des notifications de transaction en temps réel?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel type de contenu peut-on trouver sur le canal MicroApp d'Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Est-ce que MTN Cameroon permet le partage de connexion Internet avec le forfait Home NoLimit?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Un client doit composer *189# tous les 30 jours pour payer les mensualités après le premier dépôt."):
            updateAnswer(1);
            break;

        case localComparison(question, "Lequel de ces influenceurs n'est pas musulman?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quelle fonction de l'application MTN Mobile Money est spécifiquement conçue pour les entreprises?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quels modes de paiement Ayoba supporte-t-elle pour les services intégrés?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel est le plafond maximum de transaction par jour pour un utilisateur standard de MTN Mobile Money?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Ayoba permet-elle de partager sa localisation?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la fonctionnalité qui permet à un smartphone de détecter son orientation?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la résolution d'écran la plus courante pour les smartphones haut de gamme?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel partenariat MTN Cameroon a-t-il établi pour élargir sa gamme de smartphones?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle est la fonction de l'option \"Channel\" sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quels sont les téléphones qu'un client éligible peut acheter avec moins de 15.000 XAF grâce à MTN SmartPay?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Pourquoi Ayoba est-elle considérée comme une plateforme inclusive?"):
            updateAnswer(4);
            break;

        case localComparison(question, "L'application MTN Mobile Money permet- elle l'achat de produits numériques?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel influenceur a le plus de followers sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "En quelle année MTN Mobile Money a-t-il été lancé au Cameroun ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment sont établies les playlists sur Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "En quelle année Internet a-t-il été créé ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la limite de taille pour l'envoi d'un fichier sur Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quels sont les types d'informations disponibles sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Lequel de ces influenceurs a un dessin comme photo de profil sur sa chaine Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel bénéfice les entreprises peuvent- elles tirer de l'utilisation d'Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Est-il possible de bloquer temporairement son compte MTN Mobile Money via l'application?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Combien de chaînes d'influenceurs MTN existent-ils sur Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "L'application MTN Mobile Money permet- elle de visualiser l'historique complet des transactions?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Les clients ont la possibilité de payer leur appareil sur une période de 3, 6, 9 ou 12 mois."):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelles applications permettent d'accéder et de consulter des sites Web?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle fonctionnalité est spécifique aux smartphones haut de gamme vendus par MTN?"):
            updateAnswer(4);
            break;

        case localComparison(question, "La moyenne d'utilisation du smartphone par les jeunes est de 4h par jour."):
            updateAnswer(1);
            break;

        case localComparison(question, "Peut-on utiliser l'application MTN Mobile Money sans connexion Internet?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle fonctionnalité de MTN Mobile Money permet de gérer les dépenses de groupe?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel avantage MTN Mobile Money offre- t-il pour les étudiants?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel dispositif MTN Cameroon fournit-il pour accéder à l'Internet à domicile?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Comment les utilisateurs sont-ils informés des mises à jour de l'application ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle est la fonctionnalité de sécurité principale lors de l'accès à l'application MTN Mobile Money?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quel est le système d'exploitation le plus utilisé sur les smartphones?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment Ayoba facilite-t-elle l'accès à l'information pour ses utilisateurs?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle artiste féminine présente dans Boomplay à gagner le titre de l'artiste de l'année en France en 2021 ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Comment MTN promeut-il l'utilisation d'Ayoba parmi ses clients?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Ayoba permet-elle de bloquer d'autres utilisateurs?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le montant maximum qu'on peut envoyer via MTN Mobile Money pour un utilisateur non vérifié ?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la fonction de l'option \"Silent mode\" sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle est la limite de taille pour les fichiers partagés sur Ayoba?"):
            updateAnswer(3);
            break;


        case localComparison(question, "Peut-on configurer des alertes pour des seuils de dépense spécifiques dans l'application MTN Mobile Money?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Le paiement mensuel de la dette peut être effectué par d'autres moyens que Momo."):
            updateAnswer(2);
            break;

        case localComparison(question, "Que doit faire un client pour renouveler le bonus promotionnel de son smartphone?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle fonction Ayoba propose-t-elle pour améliorer l'engagement dans les groupes de discussion?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Les boîtes actuelles des forfaits        classiques MTN Home peuvent-elles être utilisées avec la nouvelle offre MTN Home?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment les clients peuvent-ils vérifier leur consommation de données Internet chez MTN Cameroon?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle fonctionnalité de l'application MTN Mobile Money est idéale pour les voyageurs?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Lequel de ces influenceurs réside à Yaoundé?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel montant par mois vous donne droit au forfait 75Go+1h d'appel vers MTN"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quels types de frais MTN Mobile Money applique-t-il généralement?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel est le montant minimum à préparer pour bénéficier de MTN SmartPay?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le type d'actualité qui ne figure pas dans Africa News?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Un client doit composer *189# tous les 30 jours pour payer les mensualités après le premier dépôt."):
            updateAnswer(1);
            break;

        case localComparison(question, "Comment vérifier si on est éligible à MTN Home NoLimit?"):
            updateAnswer(3);
            break;

        case localComparison(question, "L'application MTN Mobile Money inclut- elle un support client intégré ?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Lorsque le téléphone d'un client est bloqué pour défaut de paiement, il n'ya aucun moyen de le débloquer."):
            updateAnswer(2);
            break;

        case localComparison(question, "Peut-on programmer l'envoi de messages sur Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quelle est la limite de taille pour l'envoi d'un fichier sur Ayoba?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Combien de jours les clients ont-ils pour payer leurs mensualités après s'être abonnés?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Ayoba inclut-il un service de recommandation de contenu?"):
            updateAnswer(2);
            break;

        case localComparison(question, "MTN Mobile Money permet-il le retrait d'argent dans une banque?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Est-il possible d'utiliser l'offre NoLimit avec n'importe Quelle Box?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Qu'est ce que la Nomophobie?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel avantage Ayoba offre-t-il pour les utilisateurs sans forfait data?"):
            updateAnswer(3);
            break;


        case localComparison(question, "Qui a remporté le prix de l'album le plus streamé au MTN Zik Awards 2022?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le titre de la nouvelle chanson d'Aya Nakamura?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle est la mensualité pour le Samsung S24 Ultra 512 GB sur une période de 12 mois?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Qui a reçu le prix de l'artiste Top Trend Média durant le MTN ZIK Awards 2022?"):
            updateAnswer(4);
            break;


        case localComparison(question, "Quel volume offre les forfaits MTN Home NoLimit?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quel type de fichier peut-on envoyer via Ayoba?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Quels services Ayoba offre-t-elle pour soutenir les entreprises locales?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Les appels vidéo sont-ils disponibles sur Ayoba?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est l'avantage de l'intégration d'Ayoba avec Mobile Money?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Ayoba peut-elle être utilisée pour voter lors d'événements en direct?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le code USSD pour accéder à MTN Mobile Money?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle marque de téléphone n'est pas vendue par MTN Cameroon?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelles mesures l'application MTN Mobile Money prend-elle pour protéger les données utilisateur?"):
            updateAnswer(4);
            break;

        case localComparison(question, "L'application MTN Mobile Money offre-t- elle des notifications de transaction en temps réel?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le montant de la mensualité pour le Samsung S24 Ultra 256 GB sur une période de 12 mois ?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Comment peut-on ajouter un nouveau bénéficiaire dans l'application MTN Mobile Money?"):
            updateAnswer(4);
            break;

        case localComparison(question, "Quelle est la durée de la garantie d'un téléphone acheté dans une agence MTN?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quels type de contenus retrouve-t-on dans les channels Ayoba des influenceurs?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Est-il possible de recevoir des relevés de compte détaillés avec MTN Mobile Money?"):
            updateAnswer(1);
            break;

        case localComparison(question, "L'application MTN Mobile Money inclut- elle un support client intégré ?"):
            updateAnswer(3);
            break;

        case localComparison(question, "En combien de mois un client peut-il rembourser ses mensualités MTN Smartpay?"):
            updateAnswer(3);
            break;

        case localComparison(question, "Ayoba inclut-elle des fonctionnalités de bien-être mental?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quelle est la résolution d'écran la plus courante pour les smartphones haut de gamme?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Lequel de ces jeux entre dans la catégorie \"Jeux Africains\"?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Qu'est ce qu'un Airpod?"):
            updateAnswer(1);
            break;


        case localComparison(question, "Quel type de contenu peut-on trouver sur le canal MicroApp d'Ayoba?"):
            updateAnswer(2);
            break;

        case localComparison(question, "Quel est le premier site web au monde à proposer des achats en ligne?"):
            updateAnswer(1);
            break;

        case localComparison(question, "C'est quoi la smart TV?"):
            updateAnswer(2);
            break;

        case localComparison(question, "L'application MTN Mobile Money offre-t- elle la possibilité de payer des taxes et des impôts?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel type de contenu musical Ayoba met- elle en avant pour attirer un public jeune?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Quel est le système d'exploitation utilisé par les Iphones?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Ayoba a-t-il des jeux typiquement Africains?"):
            updateAnswer(1);
            break;


        case localComparison(question, "Quel est le moyen de connexion des AirPods à un smartphone?"):
            updateAnswer(0);
            break;

        case localComparison(question, "Les forfaits MTN Home NoLimit incluent-    ils des offres spéciales pendant les fêtes?"):
            updateAnswer(1);
            break;

        case localComparison(question, "Lequel des éléments suivants n'est pas un moteur de recherche ?"):
            updateAnswer(1);
            break;

        default:
            updateAnswer('***');
            break;
    }
}