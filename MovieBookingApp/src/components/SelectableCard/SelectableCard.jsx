import './SelectableCard.css';

function SelectableCard({ text, span, icon, type = "", onClick, ariaLabel }) {
    const className = `card ${type}`;

    return (
        <button className={className} onClick={onClick} aria-label={ariaLabel}>
            {icon}
            <div>
                <span>{span}</span>
                {text}
            </div>

        </button>
    )

}

export default SelectableCard;