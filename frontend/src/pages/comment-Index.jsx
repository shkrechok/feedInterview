import { useEffect, useState } from "react";
import { commentService } from "../services/comment.service";
import { utilService } from "../services/util.service";
import { AddComment } from "../cmps/add-comment";

export function CommentIndex() {
    const [comments, setComments] = useState([])
    const [filterBy, setFilterBy] = useState(commentService.getDefaultFilterBy())
    const debouncedSetFilterBy = utilService.debounce(setFilterBy, 800)

    console.log('CommentIndex: state comments', comments)
    console.log('CommentIndex: state filterBy', filterBy)
    useEffect(() => {
        getSetComments(filterBy)
    }, [filterBy])



    async function getComments(currFilterBy) {
        try {
            const comments = await commentService.query(currFilterBy)
            // console.log('CommentIndex:get comments', comments)
            return comments
        }
        catch (err) {
            // console.log('CommentIndex: err in getComments', err)
        }
    }

    async function getSetComments(currFilterBy) {
        try {
            const comments = await getComments(currFilterBy)
            setComments(comments)
            //   console.log('CommentIndex: fetch comments', comments)
        } catch (error) {
            //   console.log('CommentIndex: error in fetchData', error);
        }
    }

    function onAddComment(comment) {
        commentService.add(comment)
        setComments([...comments, comment])
    }

    function onChange(ev) {
        const field = ev.target.name
        let value = ev.target.value

        switch (ev.target.type) {
            case 'number':
                value = +value
                break
            case 'checkbox':
                value = ev.target.checked
                break
            default:
                break
        }
        if (field === 'txt') debouncedSetFilterBy({ ...filterBy, [field]: value })
        else setFilterBy({ ...filterBy, [field]: value })
    }
    if (!comments || !comments.length) return <div>Loading...</div>
    return (
        <div className="comment-index">
            <AddComment onAddComment={onAddComment} />
            <section className="filter" key={'comment-filter'}>
                <input type="text" name="txt" placeholder="Search" onChange={onChange} />
            </section>
            <section className="comment-list" key={'comment-list'}>
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <span>{comment.email}</span>
                        <span>{comment.message}</span>
                        <img src={`https://www.gravatar.com/avatar/${comment.imgUrl}.jpg`} alt="" />
                    </div>
                ))}
            </section>
        </div>
    )
}