import { useState } from "react";

//Custom hook för input fält 
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps;
}

export default useFormInput;