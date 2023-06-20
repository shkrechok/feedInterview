import { useFormik } from 'formik';
import { useState } from 'react';

export function AddComment({ onAddComment }) {
    // const [currComment, setCurrComment] = useState('')
    const commentForm = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            
            console.log('values', values)
            onAddComment(values)
            commentForm.resetForm()
        },
        // onChange: (values) => {
        //     values = { ...values, [values.name]: values.value }
            
            // setCurrComment({...currComment,[ev.target.name]: ev.target.value})
        // }
    })
    // function onSubmitComment(ev) {
    //     ev.preventDefault()
    //     onAddComment(currComment)
    //     setCurrComment('')
    // }

    // function onChange(ev) {
    //     setCurrComment(ev.target.value)
    // }

    return (
        <form className="add-comment" onSubmit={commentForm.handleSubmit}>
            <input type="text" name="email" placeholder="Email"  onChange={commentForm.handleChange} value={commentForm.values.email} />
            <input type="text" name="message" placeholder="Type your comment" onChange={commentForm.handleChange} value={commentForm.values.message} />
            <button type="submit">Post</button>
        </form>
    )
}

