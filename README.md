# Cinevent

## Project Description

Cinevent is a web application for booking movie tickets.  
Users can browse movies, search for specific titles, view detailed information about a movie, watch trailers, select showtimes and book tickets.

The project is built with React and Vite.

---

## Features

- Display movies on the homepage  
- Search for movies using the search bar  
- Click on a movie to navigate to a details page  
- View movie information (genre, description, rating, etc.)  
- Watch trailers via YouTube  
- View available showtimes  
- Book/select seats  
- Mark movies as favorites
- Select city to view available movies  
- Registration form for membership   

---

## Technologies

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

Clone the repository:

```bash
git clone https://github.com/BrigittaCifra/MovieBooking.git
```

Navigate to the project folder:

```bash
cd MovieBooking
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env`-file in the project folder and add:

```env
VITE_OMDB_API_KEY=din_omdb_api_key
VITE_TMDB_API_KEY=din_tmdb_api_key
```
⚠️ `.env` should not be pushed to GitHub.  
Each team member needs their own API keys

---

## Run the Project

Run:

```bash
npm run dev
```

Open in your browser:

http://localhost:5173/


---

## Project Structure

```
src/
  components/
  pages/
  services/
  stores/
```

- components → reusable components
- pages → pages (Home, MovieDetails osv)  
- services → API calls
- stores → global state (Zustand)

---

## Team Members
 
- Brigitta Cifra
- Andreas Strandt
- Renato Rako
- Natalie Conley
- Angelica Wolff 
