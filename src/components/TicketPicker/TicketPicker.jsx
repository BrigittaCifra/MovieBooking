import useBookingStore from '../../stores/bookingStore.js';
import './TicketPicker.css';

//Components
import Button from '../Button/Button.jsx';

//Icons
import { add, remove } from '../Icons.jsx';

function TicketPicker() {
    const tickets = useBookingStore((state) => state.tickets);
    const addTicket = useBookingStore((state) => state.addTicket);
    const removeTicket = useBookingStore((state) => state.removeTicket);

    return (
        <section className="ticket-section">
            <h2>Select tickets</h2>
            {tickets.map((e) => (
                <div key={e.id} className="ticket-container">
                    <div>
                        <h3>{e.age}</h3>
                    </div>
                    <div>
                        <Button
                            text={remove}
                            btnType='secondary small'
                            onClick={() => removeTicket(e.id)}
                        />
                        <p>{e.amount}</p>
                        <Button
                            text={add}
                            btnType='secondary small'
                            onClick={() => addTicket(e.id)}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TicketPicker;