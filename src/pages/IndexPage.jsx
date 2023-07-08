import React, { useContext, useEffect, useState } from "react";
import Post from "../component/Post";
import axios from "axios";
import Footer from "../component/Footer";
import "../App.css";
import { UserContext } from "../context/UserContext";
import Loading from "../component/Loading";
import Contatct from "../component/Contatct";


const IndexPage = () => {
  const [post, setPost] = useState([]);
  const {userInfo, setUserInfo} = useContext(UserContext)
  // console.log(userInfo.name)

  useEffect(() => {
    const fun = async () => {
      const res = await axios("/post");
      console.log("rse:", res);
      setPost(res.data);

    };
    fun();
  }, []);
  console.log(post);

  return (
    <>
    { post.length > 0  && post ?  <div className="fontStyle">

      <div className="p-5 bg-gray-300 ">
       {
        userInfo?.name && (

       <div className="bg-primary text-white flex items-center justify-center border">
          <p className="uppercase text-xs tracking-widest text-center px-4 py-3">
            Welcome, { userInfo.name } !! Explore, Create, and Share with our
            easy-to-use platform. Click 'Create' in the navbar to start crafting
            your own blogs!
          </p>
        </div>
        ) 
       } 
        {post.length > 0 &&
          post.map((item,i) => {
            return (
              <div key={i} className="bg-gray-200 m-4 ">
                <Post {...item} />
              </div>
            );
          })}
      </div>
      <Contatct/>
      <Footer />
    </div> : <Loading/>}
    </>

  );
};

export default IndexPage;
