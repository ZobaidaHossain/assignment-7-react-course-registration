import { useEffect } from "react";
import { useState } from "react";

import { BsBook } from 'react-icons/bs';
import Cart from "../Cart/Cart";
import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const[blogs,setBlogs]=useState([]);
    const[selectCourse,setSelectedCourse]=useState([]); 
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(()=>{
fetch('course.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])

    const handleSelectCourse=(blog)=>{
        const isExist=selectCourse.find((item)=>item.id==blog.id);
        let count=blog.credit;
        
        if(isExist){
           
           return toast("already added");
        }
        else{
            selectCourse.forEach((item)=>{
                count=count+item.credit;
            });

            const remaining = 20 - count;
            
            
            
            if(remaining<0){
              toast("remaining hour is less than 0");
            }
            else{
           
              setRemaining(remaining);
              
            }
            
            if(count>20){
                toast("credit hour is more than 20");
             
               
            }
            
             
             else{
              
             
             setTotalCost(count);
             setSelectedCourse([...selectCourse,blog]);
             }
                 
              }
             
            
           

        
      }
       

    
    

    return (
     
       
        <div className='md:flex max-w-7xl mx-auto'>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
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
        <div className="mt-12 ml-9 border rounded overflow-hidden shadow-lg w-[312px] h-[368px] mx-auto">
            <Cart selectCourse={selectCourse}
             remaining={remaining}
            totalCost={totalCost}></Cart>
            <ToastContainer />
        </div>
      </div>
      
      
      
    );
};

export default Home;