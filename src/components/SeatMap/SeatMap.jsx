import useBookingStore from "../../stores/bookingStore";
import "./SeatMap.css";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const SEATS_PER_ROW = 12;

const takenSeats = [
    { row: "B", number: 5 },
    { row: "B", number: 6 },
    { row: "D", number: 3 },
    { row: "E", number: 8 },
    { row: "F", number: 11 },
];

function SeatMap() {
    const { selectedSeats, toggleSeat } = useBookingStore();

    const isTaken = (row, number) =>
        takenSeats.some((s) => s.row === row && s.number === number);

    const isSelected = (row, number) =>
        selectedSeats.some((s) => s.row === row && s.number === number);

    return (
        <div className="seatmap">
            <div className="seatmap-screen">MOVIE SCREEN</div>

            <div className="seatmap-legend">
                <span className="legend-item">
                    <span className="seat-preview available"></span> Available
                </span>
                <span className="legend-item">
                    <span className="seat-preview selected"></span> Selected
                </span>
                <span className="legend-item">
                    <span className="seat-preview taken"></span> Taken
                </span>
            </div>

            <div className="seatmap-grid">
                {ROWS.map((row) => (
                    <div key={row} className="seatmap-row">
                        <span className="row-label">{row}</span>
                        {Array.from({ length: SEATS_PER_ROW }, (_, i) => i + 1).map((number) => {
                            const taken = isTaken(row, number);
                            const selected = isSelected(row, number);
                            return (
                                <button
                                    key={number}
                                    className={`seat ${taken ? "taken" : ""} ${selected ? "selected" : ""}`}
                                    onClick={() => !taken && toggleSeat({ row, number })}
                                    disabled={taken}
                                    title={`Rad ${row}, Stol ${number}`}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeatMap;