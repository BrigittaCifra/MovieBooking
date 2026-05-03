import { create } from "zustand";

const useBookingStore = create((set, get) => ({
    selectedSeats: [],
    
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