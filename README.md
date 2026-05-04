# Cinevent

## Projektbeskrivning

Cinevent är en webbapplikation för att boka biobiljetter.  
Användaren kan bläddra bland filmer, söka efter filmer, se detaljerad information om en film, titta på trailer och välja visningstid.

Projektet är byggt med React och Vite.

---

## Funktioner

- Visa filmer på startsidan
- Söka efter filmer i searchbaren
- Klicka på en film och komma till en detailsida
- Visa information om filmen (genre, beskrivning, rating m.m.)
- Visa trailer via YouTube
- Visa tillgängliga visningstider
- Boka/markera sittplatser
- Favoritmarkera filmer (under utveckling)
- Välja stad för att se tillgängliga filmer
- Registreringsformulär för att bli medlem
- Inlogg för medlemmar

---

## Tekniker

- React
- Vite
- React Router
- Zustand (state management)
- CSS
- JavaScript
- OMDB API
- TMDB API

---

## Installation

Klona projektet:

```bash
git clone https://github.com/BrigittaCifra/MovieBooking.git
```

Gå in i projektmappen:

```bash
cd MovieBooking/MovieBookingApp
```

Installera dependencies:

```bash
npm install
```

---

## Miljövariabler

Skapa en `.env`-fil i projektmappen och lägg till:

```env
VITE_OMDB_API_KEY=din_omdb_api_key
VITE_TMDB_API_KEY=din_tmdb_api_key
```
⚠️ `.env` ska inte pushas till GitHub  
Alla i teamet behöver egna API-nycklar  

---

## Starta projektet

Kör:

```bash
npm run dev
```

Öppna i webbläsaren:

http://localhost:5173/


---

## Projektstruktur

src/
components/
pages/
services/
stores/

- components → återanvändbara komponenter  
- pages → sidor (Home, MovieDetails osv)  
- services → API-anrop  
- stores → global state (Zustand)

---

## Gruppmedlemmar
 
- Brigitta Cifra
- Andreas Strandt
- Renato Rako
- Natalie Conley
- Angelica Wolff 
