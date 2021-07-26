import React, {ChangeEvent, FormEvent, useRef} from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (event: FormEvent) => void,
    innerRef: React.Ref<HTMLTextAreaElement>
}

export function CommentForm({value, onChange, onSubmit, innerRef}: ICommentFormProps) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea ref={innerRef} rows={4} className={styles.input} value={value} onChange={onChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}
