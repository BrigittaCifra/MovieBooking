import './Button.css';
import '../../styles/variables.css';

function Button({ text, type = "", onClick, ariaLabel }) {

    const className = `btn ${type}`;

    return (
        <button className={className} onClick={onClick} aria-label={ariaLabel}>
            {text}
        </button>
    )
}

export default Button;