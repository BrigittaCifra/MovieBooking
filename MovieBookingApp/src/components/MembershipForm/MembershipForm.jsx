import { useState } from "react";
import "./MembershipForm.css";

// tar emot onClose som prop för att kunna stänga popupen utifrån när den används i App.jsx
function MembershipForm({ onClose }) {
    // Lagrar värden från alla inputfält i ett objekt för enklare hantering
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    // Lagrar felmeddelanden per fält
    const [errors, setErrors] = useState({});
    // Håller koll på om formuläret är skickat
    const [submitted, setSubmitted] = useState(false);
    // Validerar alla fält och returnerar eventuella fel
    const validate = (data) => {
        const newErrors = {};
        if (!data.firstName.trim()) newErrors.firstName = "First name is required";
        if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!data.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{8,}$/.test(data.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Invalid phone number";
        }
        if (!data.password) {
            newErrors.password = "Password is required";
        } else if (data.password.length < 6) {
            newErrors.password = "At least 6 characters";
        }
        if (!data.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (data.password !== data.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        return newErrors;
    };
    // Kontrollerar om formuläret är giltigt, inga fel får finnas.
    const isFormValid = () => {
        return Object.keys(validate(formData)).length === 0;
    };
    // Uppdaterar formData när användaren skriver och validerar i realtid
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        if (errors[name]) {
            setErrors(validate(updated));
        }
    };
    // Validerar ett enskilt fält när användaren lämnar det
    const handleBlur = (e) => {
        const { name } = e.target;
        setErrors((prev) => ({ ...prev, ...{ [name]: validate(formData)[name] } }));
    };
    // hanterar formulärinlämning, visar fel eller sätter submitted till true om allt är korrekt
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted(true);
    };
    // Visar bekräftelseskärm efter lyckad registrering
    if (submitted) {
        return (
            // Klick utanför modalen stänger popupen
            <div className="membership_overlay" onClick={onClose}>
                {/* stopPropagation förhindrar att klick inuti stänger popupen */}
                <div className="membership_modal" onClick={(e) => e.stopPropagation()}>
                    <button className="membership_close" onClick={onClose}>✕</button>
                    <div className="membership_success">
                        <div className="membership_success_icon">✓</div>
                        <h2>Welcome Member!</h2>
                        <p>Your account has been created. You can now log in and take advantage of all benefits.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        // Mörkt överlager, klick utanför modalen stänger popupen
        <div className="membership_overlay" onClick={onClose}>
            { /* stopPropagation förhindrar att klick inuti stänger popupen */}
            <div className="membership_modal" onClick={(e) => e.stopPropagation()}>
                {/* Stängknapp uppe i högra hörnet */}
                <button className="membership_close" onClick={onClose}>✕</button>
                <section className="membership_section">
                    <div className="container">
                        {/* Rubrik och beskrivning */}
                        <div className="membership_header">
                            <span className="membership_tag">Membership</span>
                            <h1 className="membership_title">Become a Member</h1>
                            <p className="membership_subtitle">
                                Create an account and get access to discounts and exclusive offers.
                            </p>
                        </div>

                        <form className="membership_form" onSubmit={handleSubmit} noValidate>
                            {/* Förnamn och efternamn bredvid varandra */}
                            <div className="membership_row">
                                <div className="membership_field">
                                    <label className="membership_label">First Name</label>
                                    <input
                                        className={`membership_input ${errors.firstName ? "membership_input--error" : ""}`}
                                        type="text"
                                        name="firstName"
                                        placeholder="Anna"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstName && <span className="membership_error">{errors.firstName}</span>}
                                </div>
                                <div className="membership_field">
                                    <label className="membership_label">Last Name</label>
                                    <input
                                        className={`membership_input ${errors.lastName ? "membership_input--error" : ""}`}
                                        type="text"
                                        name="lastName"
                                        placeholder="Swedenborg"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastName && <span className="membership_error">{errors.lastName}</span>}
                                </div>
                            </div>
                            {/* E-post */}
                            <div className="membership_field">
                                <label className="membership_label">E-mail</label>
                                <input
                                    className={`membership_input ${errors.email ? "membership_input--error" : ""}`}
                                    type="email"
                                    name="email"
                                    placeholder="anna@example.se"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && <span className="membership_error">{errors.email}</span>}
                            </div>
                            {/* Telefonnummer */}
                            <div className="membership_field">
                                <label className="membership_label">Phone Number</label>
                                <input
                                    className={`membership_input ${errors.phone ? "membership_input--error" : ""}`}
                                    type="tel"
                                    name="phone"
                                    placeholder="070 123 45 67"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && <span className="membership_error">{errors.phone}</span>}
                            </div>
                            {/* Lösenord och bekräftelse bredvid varandra */}
                            <div className="membership_row">
                                <div className="membership_field">
                                    <label className="membership_label">Password</label>
                                    <input
                                        className={`membership_input ${errors.password ? "membership_input--error" : ""}`}
                                        type="password"
                                        name="password"
                                        placeholder="At least 6 characters"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && <span className="membership_error">{errors.password}</span>}
                                </div>
                                <div className="membership_field">
                                    <label className="membership_label">Confirm Password</label>
                                    <input
                                        className={`membership_input ${errors.confirmPassword ? "membership_input--error" : ""}`}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirmPassword && <span className="membership_error">{errors.confirmPassword}</span>}
                                </div>
                            </div>
                            {/* Skicka-knapp, inaktiv tills formuläret är giltigt */}
                            <button
                                className="membership_submit"
                                type="submit"
                                disabled={!isFormValid()}
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MembershipForm;