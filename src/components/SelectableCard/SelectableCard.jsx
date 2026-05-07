import './SelectableCard.css';

function SelectableCard({ text, span, icon, type = "", onClick, ...rest }) {
    const className = `card ${type}`;

    return (
        <button
            className={className}
            onClick={onClick}
            {...rest}
        >
            {icon}
            <div>
                <span>{span}</span>
                {text}
            </div>

        </button>
    )

}

export default SelectableCard;