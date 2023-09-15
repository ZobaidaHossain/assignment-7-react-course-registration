

import React from "react";
const Cart = ({ selectCourse }) => {
    console.log(selectCourse);
    return (
        <div className="m-3">
            <h3>Credit Hour Remaining 7 hr</h3>
            
      <h5 className="text-lg font-bold">Course Name</h5>
      <ol start={1} className="">
      {selectCourse.map((blog,index) => (
        
        <li key={blog.id}>{index+1}.{blog.course_name}</li>
        
      ))}
      </ol>
      <h3>Total Credit Hour : 13</h3>
      
    </div>
    );
};

export default Cart;