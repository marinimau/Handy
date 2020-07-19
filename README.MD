# Handy - a portata di mano

![alt text](https://raw.githubusercontent.com/marinimau/Handy/master/icon%20(2).png)

#### IT

App cross platform (Android; iOS) realizzata con React Native durante l'hackathon "TrHackYourTour" organizzato da OpenCampus e CRS4 dal 25 al 29 Maggio 2020. (**L'app è stata pensata e realizzata in 4 giorni di lavoro** l'implementazione non è da considerarsi definitiva).

L'idea nasce da un'analisi delle problematiche legate al turismo post Covid-19. L'app scansiona dei QR Code creati appositamente e posizionati in corrispondenza degli itinerari o strutture aderenti al progetto. Gli itinerari presenti al momento sono gli OST del progetto SIN2 del CRS4.

La scansione dei QR Code permetterà al fruitore di guadagnare e accumulare punti successivamente utilizzabili presso i servizi e le strutture aderenti al progetto (B&B, ristoranti, tour operator, agriturismi, rent a bike, musei, botteghe artigiane, siti archeologici etc.).

Al momento della scansione inoltre l’utente rilascerà una valutazione sull’itinerario che fornirà un feedback sia agli utenti successivi che agli operatori locali.

#### EN

Cross platform application (Android; iOS) developed with React Native during the "TrackYourTour" hackathon organized by OpenCampus and CRS4 (from 25th to 29 May 2020). **The application was designed and developed  in 4 days of work** the implementation is not definitive.

The idea borns from an analysis of the tourism problems in the post-Covid era. The application scans specific QR codes located at itineraries or structures affiliated to the project. At the moments the only present itineraries are those store as OST in the SIN2 project of CRS4. 

## Tencologie utilizzate - Technologies adopted

* [React Native](https://reactnative.dev/)
* [Hermes](https://hermesengine.dev/)
* [Firebase](https::/firebase.google.com)
* [SIN2 API](https://api.turismoattivo.sardegnaturismo.it/sin2-api)
* [Google Maps SDK](https://developers.google.com/maps/documentation/)
* [Graph QL](https://graphql.org/)

## Implementato - Developed

#### IT
Allo stato attuale l'utente può: 
* consultare tramite i dettagli ciascun itinerario  presente nel SIN2 e visualizzare la sua posizione nella mappa;
* effettuare una ricerca filtrando per categoria e fulltext tra gli itinerari del SIN2;
* acquisire punti scansionando il QR code di ciascun itinerario.

#### EN
At the moment the user can: 
* check the details of each itinerary of the SIN2 and see its position in the map;
* make a search using category or fulltext filters;
* earn points scanning QR codes.

## Da implementare - Not developed yet

#### IT

* gestione multi-utente e social authentication;
* classifica utenti (basata sui punti acquisiti),


#### EN

* multi-user management and social authentication;
* user ranking based on points acquired,

## QR code

#### IT
I QR code contengono una stringa di testo grezzo così formata  [id_itinerario_sin2]/[SHA256 digest calcolato sul nome dell'itinerario utilizzando una chiave segreta].

#### EN

The QR code contains a string of raw text with this format:  [id_of_the_itineray]/[secret key SHA256 digest calculated on the name of the itinerary].
  
Es: Silius municipio (id = 2700) --> QR-code:

```2700/28d25babef83434c84af5f5ec4d343546df657d9f16d728b97e25934ac683d95```

![qr-silius](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/qr/silius-qr.png)

## Video

### Android - Huawei P20

* [Android light mode](https://youtu.be/k-oXiVdOq1k) - scansione QR valido (SILIUS MUNICIPIO), esempio di ricerca e visualizzazione itinerari.
* [Android dark mode](https://youtu.be/1MfEBz2o-u0) - scansione QR valido (VILLASANTO), dimostrazione invalidità qr dopo alterazione del token, esempio di ricerca e visualizzazione itinerari.

### iOS - iPhone 8

* [iOS light mode](https://youtu.be/shrm2kgtFRc) - scansione QR "falsificato" (verifica del digest fallita), esempio di ricerca e visualizzazione itinerari.
* [iOS dark mode](https://youtu.be/4UqtJ_1EuAY) - esempio di ricerca e visualizzazione itinerari.

## ScreenShot

### iOS light mode

Menu:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/light_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2019.34.32.png)

Ricerca itinerario:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/light_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2019.35.00.png)


Pagina itinerario (bottomsheet chiusa):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/light_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2019.35.08.png)

Pagina itinerario (bottomsheet aperta):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/light_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2019.35.13.png)

### iOS dark mode

Menu:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/dark_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2020.46.19.png)

Ricerca itinerario:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/dark_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2020.47.29.png)


Pagina itinerario (bottomsheet chiusa):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/dark_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2020.46.47.png)

Pagina itinerario (bottomsheet aperta):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/ios/dark_mode/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-05-28%20at%2020.46.49.png)


### Android light mode

Menu:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/lightMode/Screenshot_20200528_201946_com.marinimau.trhackyourtour.jpg)

Scanner:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/lightMode/Screenshot_20200528_201941_com.marinimau.trhackyourtour.jpg)

Evaluate:
![2](https://github.com/marinimau/Handy/blob/master/screenshoot/android/lightMode/Screenshot_20200528_201930_com.marinimau.trhackyourtour.jpg)

Ricerca itinerario:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/lightMode/Screenshot_20200528_202015_com.marinimau.trhackyourtour.jpg)


Pagina itinerario (bottomsheet chiusa):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/lightMode/Screenshot_20200528_202156_host.exp.exponent.jpg)

Pagina itinerario (bottomsheet aperta):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/lightMode/Screenshot_20200528_202203_host.exp.exponent.jpg)


### Android dark mode

Menu:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/darkMode/Screenshot_20200528_205722_host.exp.exponent.jpg)

Scanner:
![1]()

Evaluate:
![2](https://github.com/marinimau/Handy/blob/master/screenshoot/android/darkMode/Screenshot_20200528_205716_host.exp.exponent.jpg)

Ricerca itinerario:
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/darkMode/Screenshot_20200528_205741_host.exp.exponent.jpg)


Pagina itinerario (bottomsheet chiusa):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/darkMode/Screenshot_20200528_205752_host.exp.exponent.jpg)

Pagina itinerario (bottomsheet aperta):
![1](https://raw.githubusercontent.com/marinimau/Handy/master/screenshoot/android/darkMode/Screenshot_20200528_205756_host.exp.exponent.jpg)






