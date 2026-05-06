
// Mock data for movie objects & API calls

export const titleData = [
    { id: 1, title: "Airplane!", newRelease: false, comingSoon: false },
    { id: 2, title: "Avatar: Fire and Ash", newRelease: false, comingSoon: false },
    { id: 3, title: "The Drama", newRelease: false, comingSoon: false },
    { id: 4, title: "GOAT", newRelease: true, comingSoon: false },
    { id: 5, title: "Hoppers", newRelease: false, comingSoon: false },
    { id: 6, title: "Project Hail Mary", newRelease: false, comingSoon: false },
    { id: 7, title: "Ready or Not 2: Here I Come", newRelease: false, comingSoon: false },
    { id: 8, title: "Reminders of Him", newRelease: false, comingSoon: false },
    { id: 9, title: "Scream 7", newRelease: false, comingSoon: false },
    { id: 10, title: "The Super Mario Galaxy Movie", newRelease: true, comingSoon: false },
    { id: 11, title: "They Will Kill You", newRelease: false, comingSoon: false },
    { id: 12, title: "You, Me & Tuscany", newRelease: false, comingSoon: false },
    { id: 13, title: "Whistle", newRelease: false, comingSoon: false },
    { id: 14, title: "Tafiti", newRelease: false, comingSoon: false },
    { id: 15, title: "I Swear", newRelease: false, comingSoon: false },
    { id: 16, title: "The Devil Wears Prada 2", newRelease: true, comingSoon: false },
    { id: 17, title: "If I Had Legs I'd Kick You", newRelease: true, comingSoon: false },
    { id: 18, title: "Father Mother Sister Brother", newRelease: true, comingSoon: false },
    { id: 19, title: "Bhooth Bangla", newRelease: true, comingSoon: false },
    { id: 20, title: "Michael", newRelease: false, comingSoon: true },
    { id: 21, title: "The Mummy", newRelease: false, comingSoon: true },
    { id: 22, title: "Animal Farm", newRelease: false, comingSoon: true },
    { id: 23, title: "Mother Mary", newRelease: false, comingSoon: true },
    { id: 24, title: "Hokum", newRelease: false, comingSoon: true },
    { id: 25, title: "Hamlet", newRelease: false, comingSoon: true },
    { id: 26, title: "The Sheep Detectives", newRelease: false, comingSoon: true },

];

export const showtimesData = [
    // Airplane!
    { id: 1, movieId: 1, day: "monday", times: ["14:00", "17:00"], date: "4 May" },
    { id: 2, movieId: 1, day: "tuesday", times: ["14:00", "17:00"], date: "5 May" },
    { id: 3, movieId: 1, day: "friday", times: ["13:00", "16:30"], date: "8 May" },
    { id: 4, movieId: 1, day: "saturday", times: ["11:00", "14:00", "16:00"], date: "9 May" },
    { id: 5, movieId: 1, day: "sunday", times: ["11:00", "14:00", "16:00"], date: "10 May" },

    // Avatar
    { id: 6, movieId: 2, day: "tuesday", times: ["16:00", "18:30"], date: "12 May" },
    { id: 7, movieId: 2, day: "thursday", times: ["18:30", "20:00"], date: "14 May" },
    { id: 8, movieId: 2, day: "friday", times: ["18:30", "20:00"], date: "15 May" },
    { id: 9, movieId: 2, day: "saturday", times: ["16:00", "19:30", "21:00"], date: "16 May" },
    { id: 10, movieId: 2, day: "sunday", times: ["15:30", "17:00"], date: "17 May" },

    // The Drama
    { id: 11, movieId: 3, day: "tuesday", times: ["20:00", "21:30"], date: "19 May" },
    { id: 12, movieId: 3, day: "wednesday", times: ["20:00", "21:30"], date: "20 May" },
    { id: 13, movieId: 3, day: "friday", times: ["17:00", "18:30", "20:00", "22:00"], date: "22 May" },
    { id: 14, movieId: 3, day: "saturday", times: ["17:30", "19:30", "22:00"], date: "23 May" },
    { id: 15, movieId: 3, day: "sunday", times: ["18:00", "19:30", "21:00"], date: "24 May" },

    // GOAT
    { id: 16, movieId: 4, day: "wednesday", times: ["12:00", "14:00", "17:00"], date: "27 May" },
    { id: 17, movieId: 4, day: "thursday", times: ["16:30", "17:30"], date: "28 May" },
    { id: 18, movieId: 4, day: "friday", times: ["12:00", "14:30", "16:00", "17:30"], date: "29 May" },
    { id: 19, movieId: 4, day: "saturday", times: ["11:00", "14:00", "15:30", "17:00"], date: "30 May" },
    { id: 20, movieId: 4, day: "sunday", times: ["11:00", "13:00", "15:30"], date: "31 May" },

    // Hoppers
    { id: 21, movieId: 5, day: "tuesday", times: ["14:00", "17:00"], date: "2 June" },
    { id: 22, movieId: 5, day: "wednesday", times: ["12:00", "14:00", "17:00"], date: "3 June" },
    { id: 23, movieId: 5, day: "thursday", times: ["16:30", "17:30"], date: "4 June" },
    { id: 24, movieId: 5, day: "friday", times: ["12:00", "14:30", "16:00", "17:30"], date: "5 June" },
    { id: 25, movieId: 5, day: "saturday", times: ["11:00", "14:00", "15:30", "17:00"], date: "6 June" },
    { id: 26, movieId: 5, day: "sunday", times: ["11:00", "13:00", "15:30"], date: "7 June" },

    // Project Hail Mary
    { id: 27, movieId: 6, day: "monday", times: ["18:30"], date: "8 June" },
    { id: 28, movieId: 6, day: "tuesday", times: ["20:30"], date: "9 June" },
    { id: 29, movieId: 6, day: "wednesday", times: ["18:30", "21:00"], date: "10 June" },
    { id: 30, movieId: 6, day: "friday", times: ["19:30", "21:30"], date: "12 June" },
    { id: 31, movieId: 6, day: "saturday", times: ["21:00", "23:00"], date: "13 June" },
    { id: 32, movieId: 6, day: "sunday", times: ["21:00"], date: "14 June" },

    // Ready or Not 2
    { id: 33, movieId: 7, day: "tuesday", times: ["21:30"], date: "16 June" },
    { id: 34, movieId: 7, day: "wednesday", times: ["22:00"], date: "17 June" },
    { id: 35, movieId: 7, day: "friday", times: ["22:30"], date: "19 June" },
    { id: 36, movieId: 7, day: "saturday", times: ["22:30"], date: "20 June" },

    // Reminders of Him
    { id: 37, movieId: 8, day: "wednesday", times: ["16:30", "20:00"], date: "17 June" },
    { id: 38, movieId: 8, day: "thursday", times: ["18:00", "20:30"], date: "18 June" },
    { id: 39, movieId: 8, day: "friday", times: ["17:00", "18:30", "20:00", "21:30"], date: "19 June" },
    { id: 40, movieId: 8, day: "saturday", times: ["17:00", "19:00", "20:30"], date: "20 June" },
    { id: 41, movieId: 8, day: "sunday", times: ["16:00", "19:00"], date: "21 June" },

    // Scream 7
    { id: 42, movieId: 9, day: "tuesday", times: ["22:00"], date: "23 June" },
    { id: 43, movieId: 9, day: "thursday", times: ["21:30", "23:30"], date: "25 June" },
    { id: 44, movieId: 9, day: "friday", times: ["22:00", "23:00"], date: "26 June" },
    { id: 45, movieId: 9, day: "saturday", times: ["22:00", "23:00"], date: "27 June" },

    // Mario
    { id: 46, movieId: 10, day: "monday", times: ["16:00", "18:00", "20:00"], date: "1 June" },
    { id: 47, movieId: 10, day: "wednesday", times: ["16:00", "18:00", "20:00"], date: "3 June" },
    { id: 48, movieId: 10, day: "thursday", times: ["18:00", "19:30"], date: "4 June" },
    { id: 49, movieId: 10, day: "friday", times: ["16:00", "17:30", "19:00", "21:00"], date: "5 June" },
    { id: 50, movieId: 10, day: "saturday", times: ["16:00", "17:30", "19:00", "21:00"], date: "6 June" },
    { id: 51, movieId: 10, day: "sunday", times: ["16:00", "17:30", "19:00", "21:00"], date: "7 June" },

    // They Will Kill You
    { id: 52, movieId: 11, day: "monday", times: ["22:00"], date: "11 May" },
    { id: 53, movieId: 11, day: "thursday", times: ["21:30", "23:30"], date: "14 May" },
    { id: 54, movieId: 11, day: "friday", times: ["22:00", "23:00"], date: "15 May" },
    { id: 55, movieId: 11, day: "saturday", times: ["22:00", "23:00"], date: "16 May" },

    // You, Me & Tuscany
    { id: 56, movieId: 12, day: "wednesday", times: ["16:30", "20:00"], date: "20 May" },
    { id: 57, movieId: 12, day: "thursday", times: ["18:00", "20:30"], date: "21 May" },
    { id: 58, movieId: 12, day: "friday", times: ["17:00", "18:30", "20:00", "21:30"], date: "22 May" },
    { id: 59, movieId: 12, day: "saturday", times: ["17:00", "19:00", "20:30"], date: "23 May" },
    { id: 60, movieId: 12, day: "sunday", times: ["16:00", "19:00"], date: "24 May" },

    // Whistle
    { id: 61, movieId: 13, day: "monday", times: ["22:00"], date: "25 May" },
    { id: 62, movieId: 13, day: "thursday", times: ["21:30", "23:30"], date: "28 May" },
    { id: 63, movieId: 13, day: "friday", times: ["22:00", "23:00"], date: "29 May" },
    { id: 64, movieId: 13, day: "saturday", times: ["22:00", "23:00"], date: "30 May" },

    // Tafiti
    { id: 65, movieId: 14, day: "tuesday", times: ["14:00", "17:00"], date: "2 June" },
    { id: 66, movieId: 14, day: "wednesday", times: ["12:00", "14:00", "17:00"], date: "3 June" },
    { id: 67, movieId: 14, day: "thursday", times: ["16:30", "17:30"], date: "4 June" },
    { id: 68, movieId: 14, day: "friday", times: ["12:00", "14:30", "16:00", "17:30"], date: "5 June" },
    { id: 69, movieId: 14, day: "saturday", times: ["11:00", "14:00", "15:30", "17:00"], date: "6 June" },
    { id: 70, movieId: 14, day: "sunday", times: ["11:00", "13:00", "15:30"], date: "7 June" },

    // I Swear
    { id: 71, movieId: 15, day: "monday", times: ["19:00"], date: "8 June" },
    { id: 72, movieId: 15, day: "wednesday", times: ["16:30", "20:00"], date: "10 June" },
    { id: 73, movieId: 15, day: "thursday", times: ["19:00"], date: "11 June" },
    { id: 74, movieId: 15, day: "friday", times: ["18:00", "20:00", "21:30"], date: "12 June" },
    { id: 75, movieId: 15, day: "saturday", times: ["15:00", "17:00"], date: "13 June" },
    { id: 76, movieId: 15, day: "sunday", times: ["16:00", "19:00"], date: "14 June" },

    // Operation Beaver
    { id: 77, movieId: 16, day: "tuesday", times: ["14:00", "17:00"], date: "16 June" },
    { id: 78, movieId: 16, day: "wednesday", times: ["12:00", "14:00", "17:00"], date: "17 June" },
    { id: 79, movieId: 16, day: "thursday", times: ["16:30", "17:30"], date: "18 June" },
    { id: 80, movieId: 16, day: "friday", times: ["12:00", "14:30", "16:00", "17:30"], date: "19 June" },
    { id: 81, movieId: 16, day: "saturday", times: ["11:00", "14:00", "15:30", "17:00"], date: "20 June" },
    { id: 82, movieId: 16, day: "sunday", times: ["11:00", "13:00", "15:30"], date: "21 June" },

    // If I had legs I'd Kick You
    { id: 83, movieId: 17, day: "monday", times: ["18:30"], date: "22 June" },
    { id: 84, movieId: 17, day: "thursday", times: ["19:30", "21:00"], date: "25 June" },
    { id: 85, movieId: 17, day: "friday", times: ["18:00", "21:00"], date: "26 June" },
    { id: 86, movieId: 17, day: "saturday", times: ["14:30", "17:30"], date: "27 June" },

    // Father Mother Sister Brother (new release)
    { id: 87, movieId: 18, day: "monday", times: ["16:00", "19:00"], date: "1 June" },
    { id: 88, movieId: 18, day: "wednesday", times: ["16:30", "19:30"], date: "3 June" },
    { id: 89, movieId: 18, day: "thursday", times: ["18:00", "19:30"], date: "4 June" },
    { id: 90, movieId: 18, day: "friday", times: ["17:00", "19:00", "20:30"], date: "5 June" },
    { id: 91, movieId: 18, day: "saturday", times: ["15:00", "17:00", "19:00"], date: "6 June" },
    { id: 92, movieId: 18, day: "sunday", times: ["13:00", "16:00", "19:00"], date: "7 June" },

    // Booth Bangla (new release)
    { id: 93, movieId: 19, day: "monday", times: ["19:00", "21:30"], date: "8 June" },
    { id: 94, movieId: 19, day: "wednesday", times: ["19:30", "20:30", "22:00"], date: "10 June" },
    { id: 95, movieId: 19, day: "thursday", times: ["18:00", "19:30"], date: "11 June" },
    { id: 96, movieId: 19, day: "friday", times: ["18:30", "20:00", "22:30"], date: "12 June" },
    { id: 97, movieId: 19, day: "saturday", times: ["18:00", "20:00", "22:00"], date: "13 June" },
    { id: 98, movieId: 19, day: "sunday", times: ["17:00", "19:00", "21:00"], date: "14 June" }

];