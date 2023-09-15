import { useEffect } from "react";
import { useState } from "react";

import { BsBook } from 'react-icons/bs';
import Cart from "../Cart/Cart";
const Home = () => {
    const[blogs,setBlogs]=useState([]);
    const[selectCourse,setSelectedCourse]=useState([]); 

    useEffect(()=>{
fetch('course.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])

    const handleSelectCourse=(blog)=>{
        setSelectedCourse([...selectCourse,blog]);

    }

    return (
     
       
        <div className='md:flex max-w-7xl mx-auto'>
        <div className="mt-12 ml-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <div key={index} className="w-80">
              <div className="border rounded overflow-hidden shadow-lg">
                <img className="w-full h-40" src={blog.img} alt="" />
                <div className="p-4 flex flex-col h-72">
                  <h2 className="text-lg
                  font-semibold">{blog.course_name}</h2>
                  <p className="text-sm font-normal text-justify mt-2">{blog.details}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div >
                      <p className="text-base font-medium">$Price: {blog.price}</p>
                     
                    </div>
                    <div className="px-1 py-3 flex items-center ">
                      <button className="mr-1"><BsBook /></button>
                      <p className="text-base font-medium">credit: {blog.credit}hr</p>
                    </div>
                  </div>
                  <button onClick={()=>handleSelectCourse(blog)}className="bg-blue-400 mt-auto text-center text-white py-2 px-4 rounded">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 ml-9 border rounded overflow-hidden shadow-lg w-[312px] h-[255px] mx-auto">
            <Cart selectCourse={selectCourse}></Cart>
        </div>
      </div>
      
      
      
    );
};

export default Home;