import { useState } from "react";
import './TicketPicker.css';

//Components
import Button from '../Button/Button.jsx';

//Icons
import { add, remove } from '../Icons.jsx';

function TicketPicker({ ticket, setTicket }) {
    const ticketList = [
        { id: 1, age: "Adult", price: 120 },
        { id: 2, age: "Child", price: 90 },
        { id: 3, age: "Senior", price: 110 }
    ];

    return (
        <section className="ticket-section">
            <h2>Select tickets</h2>
            {ticketList.map((e) => (
                <div key={e.id} className="ticket-container">
                    <div>
                        <h3>{e.age}</h3>
                        <p>{e.price} kr</p>
                    </div>
                    <div>
                        <Button
                            text={remove}
                            type='secondary small'
                            onClick={setTicket}
                        />
                        <p>{ticket}</p>
                        <Button
                            text={add}
                            type='secondary small'
                            onClick={setTicket}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TicketPicker;