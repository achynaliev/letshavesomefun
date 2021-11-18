import React, { useState, useContext, useEffect } from "react";
import { commentContext } from "../../contexts/CommentContext";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const CommentList = () => {
  const { getAllComments, comments } = useContext(commentContext);
  const params = useParams();
  useEffect(() => getAllComments(params.tweetId), []);

  return (
    <div>
      {comments ? (
        comments.map((comment) => <Comment comment={comment} />)
      ) : (
        <div></div>
      )}{" "}
    </div>
  );
};

export default CommentList;
