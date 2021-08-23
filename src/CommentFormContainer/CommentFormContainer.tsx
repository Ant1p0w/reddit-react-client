import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../store/reducer";
import {CommentForm} from "../CommentForm";
import {Formik, FormikErrors, FormikHelpers, useFormik} from 'formik';

interface ICommentFormContainerProps {
    userName?: string
}

interface ICommentFormValues {
    comment: string
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

    function handleChange(setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void){
        return function (event: React.ChangeEvent<HTMLTextAreaElement>) {
            dispatch(updateComment(event.target.value));
            setFieldValue('comment', event.target.value);
        }
    }

    function handleSubmit(values: ICommentFormValues, actions: FormikHelpers<ICommentFormValues>) {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }

    const initialValues: ICommentFormValues = {comment: value};

    const validate = (values: ICommentFormValues) => {
        let errors: FormikErrors<ICommentFormValues> = {};

        if (values.comment.length <= 3) {
            errors.comment = 'Поле должнобыть болье 3-х символов.';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
            render={({values, errors, touched, setFieldValue}) => (
                <CommentForm
                    innerRef={ref}
                    value={value}
                    onChange={handleChange(setFieldValue)}
                    errors={errors}
                    touched={touched}
                />
            )}
        />
    )
}
