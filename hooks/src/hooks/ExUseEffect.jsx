import React, { useEffect, useState } from 'react'

const ExUseEffect = () => {
    // const [count , setCount] =useState(0);
    // useEffect(()=>{
    //     // setCount(1000);
    //     document.title = "MRU";
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },4000)
    // })

    const[users , setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data=>{
            // console.log(data);
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    } , []);

  return (
    <div>ExUseEffect

        {/* <h1>{count}</h1> */}

        {
            users.map((user , i)=>{
                return(
             // <>
             //     <h1>{user.name}</h1>
             //     <h3>{user.email}</h3>
             // </>
             //! OR
             <React.Fragment key={i}>
             <h1>{user.name}</h1>
             <h3>{user.email}</h3>
                </React.Fragment>
                )
            })
        }
    </div>
  )
}
export default ExUseEffect



