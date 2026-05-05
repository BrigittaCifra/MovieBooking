import { create } from "zustand";

const useBookingStore = create((set, get) => ({
    tickets: ([
        { id: 1, amount: 0, age: "Adult" },
        { id: 2, amount: 0, age: "Child" },
        { id: 3, amount: 0, age: "Senior" },
        { id: 4, amount: 0, age: "Student" },
    ]),

    showtime: [],

    selectedSeats: [],

    //Lägger till tickets
    addTicket: (id) =>
        //set funktionen anropas
        set((previous) => ({
            //previous är hela create objektet. Map loopar igenom tickets arrayen och försöker hitta id:t som matchar
            tickets: previous.tickets.map((ticket) => ticket.id === id
                //Om id:t matchar uppdateras amount i den aktuella objektet
                ? { ...ticket, amount: ticket.amount + 1 }
                //Om id:t inte matchar uppdateras inte objektet
                : ticket
            )
        })),

    //Tar bort tickets
    removeTicket: (id) =>
        set((previous) => ({
            tickets: previous.tickets.map((ticket) => ticket.id === id
                //Math.max (0, value) gör så att värdet inte kan gå under 0 då Math.max tar det högsta värdet
                ? { ...ticket, amount: Math.max(0, ticket.amount - 1) }
                : ticket
            )
        })),

    setShowtime: (day, date, time) =>
        set({ showtime: { day, date, time } }),

    toggleSeat: (seat) =>
        set((state) => {
            const exists = state.selectedSeats.some(
                (s) => s.row === seat.row && s.number === seat.number
            );
            return {
                selectedSeats: exists
                    ? state.selectedSeats.filter(
                        (s) => !(s.row === seat.row && s.number === seat.number)
                    )
                    : [...state.selectedSeats, seat],
            };
        }),

    clearSeats: () => set({ selectedSeats: [] }),

    getTotalPrice: () => {
        const { selectedSeats } = get();
        return selectedSeats.length * 129;
    },

}));

export default useBookingStore;
