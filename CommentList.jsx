import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "임호",
        comment: "소통해요.",
    },
    {
        name: "메시",
        comment: "반가워요.",
    },
    {
        name: "하정우",
        comment: "하이.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}          
        </div>
    );
}

export default CommentList