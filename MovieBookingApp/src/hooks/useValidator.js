import { useState } from "react";

//Custom hook för validering 
function useValidator(email) {
    const [error, setError] = useState(null);

    const validate = () => {
        if (!email || email.trim().length === 0) {
            setError("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Invalid email address");
        }
    }

    return error;

}

export default useValidator;