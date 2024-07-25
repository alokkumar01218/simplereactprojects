import React, { useCallback, useState } from 'react'
import { AiOutlineStar } from "react-icons/ai";

export default function Star({noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex){
        console.log(currentIndex)
    }
    function handleMouseEnter(currentIndex){
        console.log(currentIndex)
    }
    function handleMouseLeave(currentIndex){
        console.log(currentIndex)
    }

  return (
    <div className='star-rating'>
      {
        [...Array(noOfStars)].map((_, index) => {
            index += 1
            return <AiOutlineStar 
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={50}
            />
        })
      }
    </div>
  )
}
