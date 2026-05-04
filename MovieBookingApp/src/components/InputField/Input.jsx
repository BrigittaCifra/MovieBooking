import './Input.css';

function Input({ type = "text", label, id, value, onChange, error, ...rest }) {
    return (
        <div className="input_field">
            <label
                className="input_label"
                htmlFor={id}
            >{label}</label>
            <input
                className={`input ${error ? "input-error " : ""}`}
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && <span className="error-message">{error}</span>}
        </div >
    )
}

export default Input;