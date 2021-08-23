import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (event: FormEvent) => void,
    innerRef: React.Ref<HTMLTextAreaElement>
}

export function CommentForm() {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());

        const isFormValidate = !validateValue();
        if(!isFormValidate) return;

        alert('form send');
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    function validateValue() {
        if (value.length <= 3) return 'Введите больше 3-х символов.'
        return '';
    }

    const isFormValid = !validateValue();

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                rows={4}
                className={styles.input}
                value={value}
                onChange={handleChange}
                aria-invalid={valueError ? 'true' : undefined}/>
            {touched && (<div>{valueError}</div>)}

            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
