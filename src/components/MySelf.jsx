import React from "react";

    function MySelf( {name , age , gender} ) 
        {
            return(
                <div>

                    <h1>
                        My name is {name}. I am {age} years old. I am a {gender}.
                    </h1>

                </div>);
        }

export default MySelf;

// SPREAD AND REST OP
// SYMBOL
// spread allows one objects value to be copied into another.
// person = {
    // firstName : "Christabel";
    // lastName : "Alorzuke";
    // age : 25
// }

//  let newChristabel ={...person}
// console.log(newJohn);


// const {firstName ...others} = person

// rest is used to destructure an object
// 

