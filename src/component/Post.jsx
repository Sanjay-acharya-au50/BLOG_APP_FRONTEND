import React from "react";
import {formatISO9075} from 'date-fns'
import {Link} from 'react-router-dom'

const Post = (item) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Link to={`/post/${item._id}`} className="col-span-1">
        <img src={`https://sanjay-blog-app.onrender.com/${item.img}`} alt="" />{" "}
      </Link>
      <Link to={`/post/${item._id}`} className="col-span-2">
        <div>{item.title}</div>
        <p>author: {item.author.email}</p>

        <p>{formatISO9075(new Date(item.createdAt))}</p>
      </Link>
    </div>
  );
};

export default Post;
