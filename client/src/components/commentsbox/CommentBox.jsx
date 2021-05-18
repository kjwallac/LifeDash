import React, {useState, useRef} from "react";
//import cn from "classnames";
import "../styles.css";

const INITIAL_HEIGHT =46;

const CommentBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commnetValue, setCommentValue] = useState("")


const outerHeight = useRef(INITIAL_HEIGHT);
const textRef = useRef(null);
const containerRef = useRef(null);

const onExpand = () => {
    if (!isExpanded) {
        outerHeight.current = containerRef.current.scrollHeight;
        setIsExpanded(true);
    } 
        
};

const onChange = (e) => {
    setCommentValue(e.target.value);
};

const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
};

const onSubmit = (e) => {
    e.preventDefault();
    console.log('send the form data somewhere')
}

return (
    <form
    onSubmit={onSubmit}
    ref={containerRef}
    className={("comment-box", {
        expanded: isExpanded,
        collapsed: !isExpanded,
        modified: commnetValue.length > 0, 
    })}
    style={{
        minHeight: isExpanded ? outerHeight.current: INITIAL_HEIGHT
    }}
    >

    <div className="header">
        <div className="user">
            <img
            src="avatar/path"
            alt="use avatar"
            />
            <span>User Name</span>
            </div>
            </div>


    <label htmlFor="comment">Write a Comment</label>
    <textarea
        ref={textRef}
        onClick={onExpand}
        onFocus={onExpand}
        onChange={onChange}
        className="comment-field"
        placeholder="Write a Comment"
        value={commnetValue}
        name="comment"
        id="comment"
        />

    <div className="actions">
        <button type="button" className="cancel" onClick={onClose}>
            cancel
        </button>
        <button type="submit" disabled={commnetValue.length <1}>
            Add Comment
        </button>
        </div>  
    </form>
   
);

};

export default CommentBox;