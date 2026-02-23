import { useState } from "react";
import styles from "./OldForm.module.css";

export function OldForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const BACK_END_URL = "http://localhost:3000";

     function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`${BACK_END_URL}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, comment })
        }).then(() => {
            setName("");
            setComment("");
            setError(null);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {error && <p className={styles.error}>Wystąpił błąd: {error.message}</p>}
            <label>
                <p>Imię:</p>
                <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                disabled={isLoading}
                />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea className={styles.textarea} 
                name="comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                disabled={isLoading} 
                />
            </label>

            <button className={styles.submitButton} disabled={isLoading}>{isLoading ? "Ładowanie..." : "Zapisz"}</button>
        </form>
    );
}
