

import React from "react";
const Cart = ({ selectCourse,remaining,totalCost }) => {
    console.log(selectCourse);
    return (
        <div className="m-3">
            <h3>Credit Hour Remaining {remaining} hr</h3>
            < hr className="m-2" />
            
      <h5 className="text-lg font-bold">Course Name</h5>
      <ol start={1} className="">
      {selectCourse.map((blog,index) => (
        
        <li key={blog.id}>{index+1}.{blog.course_name}</li>
        
      ))}
      </ol>
      <hr className="m-2"></hr>
      <h3>Total Credit Hour : {totalCost}</h3>
      
    </div>
    );
};

export default Cart;