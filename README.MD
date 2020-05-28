# Handy - a portata di mano

App cross platform (Android iOS) realizzata con React Native durante l'hackathon "TrHackYourTour" organizzato da OpenCampus e CRS4 dal 25 al 29 Maggio 2020.

L'idea nasce da un'analisi delle problematiche legate al turismo e al Covid-19. Il progetto vuole promuovere il turismo sostenibile (attivo, culturale ed enogastronomico) e la mobilità dolce. La proposta consiste nella creazione di un’App che scansioni dei QR Code creati appositamente e posizionati in corrispondenza degli itinerari presenti come OST nel progetto SIN2 del CRS4.

La scansione dei QR Code permetterà al fruitore di guadagnare e accumulare punti successivamente utilizzabili presso i servizi e le strutture aderenti al progetto (B&B, ristoranti, tour operator, agriturismi, rent a bike, musei, botteghe artigiane, siti archeologici etc.).

Al momento della scansione inoltre l’utente rilascerà una valutazione sull’itinerario che fornirà un feedback sia agli utenti successivi che agli operatori locali.

L’obiettivo è fidelizzare il fruitore (sardo, italiano o straniero) e destagionalizzare l’offerta turistica, proponendo una soluzione alternativa al turismo balneare e di massa.


## Tencologie utilizzate

* [React Native](https://reactnative.dev/)
* [Hermes](https://hermesengine.dev/)
* [Firebase](https::/firebase.google.com)
* [SIN2 API](https://api.turismoattivo.sardegnaturismo.it/sin2-api)
* [Google Maps SDK](https://developers.google.com/maps/documentation/)
* [Graph QL](https://graphql.org/)

# Implementato

Allo stato attuale l'utente può: 
* consultare tramite l'app tutti ciascun itinerario  presente nel SIN2 e visualizzare la sua posizione nella mappa;
* effettuare una ricerca filtrando per categoria e fulltext tra gli itinerari del SIN2
* acquisire punti scansionando il QR code di ciascun itinerario (contiene id/key-SHA256).

# Da implementare

* gestione multi-utente e social authentication;
* classifica utenti (basata sui punti acquisiti)

## ScreenShot


