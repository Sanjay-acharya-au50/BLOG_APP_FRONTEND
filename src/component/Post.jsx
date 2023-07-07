import React from "react";
import {formatISO9075} from 'date-fns'
import {Link} from 'react-router-dom'

const Post = (item) => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center border m-3 rounded-xl shadow-2xl bg-gray-200">
      <Link to={`/post/${item._id}`} className="col-span-1 flex justify-center items-center w-full h-full  ">

        <img src={`https://sanjay-blog-app.onrender.com/${item.img}`} className="h-[300px] w-[300px]" alt="" />
      </Link>
      <Link to={`/post/${item._id}`} className="col-span-2 flex justify-center  flex-col w-full h-full  ">
        <div>{item.title}</div>
        <p>author: {item.author.email}</p>
        <p>Summary: {item.sumamry}</p>

        <p>{formatISO9075(new Date(item.createdAt))}</p>
      </Link>
    </div>
  );
};

export default Post;
