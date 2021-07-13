import React, {ChangeEvent, FormEvent, useContext, useEffect, useRef} from 'react';
import styles from './commentform.css';
import {commentContext} from "../context/commentContext";

interface ICommentFormProps {
    userName?: string
}

export function CommentForm({userName}: ICommentFormProps) {
    const {value, onChange} = useContext(commentContext);
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!!userName && !!ref.current ) {
            onChange(userName + ', ');
            ref.current.focus();
        }
    }, [userName]);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea ref={ref} rows={4} className={styles.input} value={value} onChange={handleChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
