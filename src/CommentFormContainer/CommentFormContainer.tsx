import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../store/reducer";
import {CommentForm} from "../CommentForm";

interface ICommentFormContainerProps {
    userName?: string
}

export function CommentFormContainer({userName}: ICommentFormContainerProps) {
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
        <CommentForm
            // value={value}
            // onChange={handleChange}
            // onSubmit={handleSubmit}
            // innerRef={ref}
        />
    )
}
