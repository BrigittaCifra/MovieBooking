import { create } from "zustand";

const useBookingStore = create((set) => ({
    tickets: ([
        { id: 1, amount: 0, age: "Adult", price: 120 },
        { id: 2, amount: 0, age: "Child", price: 90 },
        { id: 3, amount: 0, age: "Senior", price: 100 },
        { id: 4, amount: 0, age: "Student", price: 100 },
    ]),

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
}));

export default useBookingStore;