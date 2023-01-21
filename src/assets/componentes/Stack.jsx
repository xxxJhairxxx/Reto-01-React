import React from 'react';


const stack = ({number,description}) => {
    return ( 
        <div className='stacks__stack'>
                    <p className="stack__number">{number}</p>
                    <p className="stack__description">{description}</p>
                </div>
     );
}
 
export default stack;