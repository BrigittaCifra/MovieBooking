import './Button.css';
import '../../styles/variables.css';

function Button({ text, btnType = "", onClick, ariaLabel, ...rest }) {

    const className = `btn ${btnType}`;

    return (
        <button
            className={className}
            onClick={onClick}
            aria-label={ariaLabel}
            {...rest}
        >
            {text}
        </button>
    )
}

export default Button;