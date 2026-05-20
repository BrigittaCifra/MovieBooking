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

## Screenshots
<img width="1477" height="706" alt="Movie Carousel" src="https://github.com/user-attachments/assets/3dae951b-80eb-4186-8b7e-7b7f6a3de137" />
<img width="1225" height="688" alt="Member Form" src="https://github.com/user-attachments/assets/2ea20a31-e6f5-42fc-ba5a-152d212ecb75" />
<img width="1478" height="713" alt="Homepage" src="https://github.com/user-attachments/assets/930eaeb8-4b3c-46f8-a2a1-7371f9a60063" />
<img width="1248" height="605" alt="Favorites" src="https://github.com/user-attachments/assets/4d37c4ec-6099-4e0a-93f5-82b19f1b459b" />
<img width="1461" height="707" alt="Booking Page" src="https://github.com/user-attachments/assets/6d096f60-a6e1-4949-aca9-8805347a52c6" />
<img width="1232" height="705" alt="All Movies" src="https://github.com/user-attachments/assets/032a493e-a943-444c-a88d-4797d15cbe76" />
<img width="1457" height="711" alt="Showtime Picker" src="https://github.com/user-attachments/assets/a5fcb942-a0a6-490a-b2fb-fa8c41990326" />
<img width="1333" height="692" alt="Searchbar" src="https://github.com/user-attachments/assets/62fa7ec5-63ed-4d0c-b6cc-f3c4d5540cdc" />
<img width="931" height="703" alt="Movie Details" src="https://github.com/user-attachments/assets/9cd78ea1-2d31-43b4-8a80-ba4700131039" />

---

## Team Members
 
- Brigitta Cifra
- Andreas Strandt
- Renato Rako
- Natalie Conley
- Angelica Wolff 
