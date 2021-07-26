import React, {ChangeEvent, FormEvent, useContext, useEffect, useRef} from 'react';
import styles from './commentform.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../store";

interface ICommentFormProps {
    userName?: string
}

export function CommentForm({userName}: ICommentFormProps) {
    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!!userName && !!ref.current) {
            dispatch(updateComment(userName + ', '));
            ref.current.focus();
        }
    }, [userName]);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value));
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
