import React from "react";
import '../component/loading.css'


const Loading = () => {
  return (
    <div className="border h-[100vh] w-[100vw] flex justify-center items-center bg-gray-300">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
