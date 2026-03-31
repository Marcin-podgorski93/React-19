import styles from "./NewForm.module.css";
import { useState } from "react";
import {useFormStatus} from "react-dom";

function SubmitButton () {
        const {pending} = useFormStatus();

        return (
            <button className={styles.submitButton}>{pending ? "Ładowanie..." : "Zapisz"}
            </button>
        )}


function FormField() {
    const {pending} = useFormStatus();
    return (
        <>
        <label>
                <p>Imię:</p>
                <input type="text" name="name" disabled={pending}/>
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea className={styles.textarea} name="comment" disabled={pending}/>
        </label>
        </>
    )
}

export function NewForm() {


    const BACK_END_URL = "http://localhost:3000";
    const [error, setError] = useState(null);


    

    function handleSubmit(formData) {
        return (
    fetch(`${BACK_END_URL}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: formData.get("name"), 
                comment: formData.get("comment") })
        })
        )}


    return (
        <form className={styles.form} action={handleSubmit}>
            {error && <p className={styles.error}>Wystąpił błąd: {error.message}</p>}
            <FormField />
            <SubmitButton />
        </form>
    );
}
