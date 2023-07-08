import React from "react";
import {formatISO9075} from 'date-fns'
import {Link} from 'react-router-dom'



const Post = (item) => {

  return (
    <div className="md:p-0 p-3 md:grid grid-cols-3 gap-2 items-center bg-gray-100  shadow-xl ">
      <Link to={`/post/${item._id}`} className="col-span-1 flex justify-center items-center w-full h-full  ">
        {/* http://localhost:5000 */}
        {/* https://sanjay-blog-app.onrender.com */}
        <img src={`https://sanjay-blog-app.onrender.com/${item.img}`} className="h-[300px] w-[300px] rounded-lg m-2" alt="" />
      </Link>
      <Link to={`/post/${item._id}`} className="col-span-2 flex justify-center  flex-col w-full h-full  ">
        <div>Title : {item.title}</div>
        <p>Author : {item.author.name}</p>
        <p>Summary : {item.sumamry}</p>

        <p>{formatISO9075(new Date(item.createdAt))}</p>
      </Link>

    </div>
  );
};

export default Post;
