import React, { useState} from 'react'
import useInput from "../components/useInput"


function UseForm() {
    const [firstName, bindFirstName, resetFirstName] =  useInput("")
    const [lastName, bindLastName, resetLastName] = useInput("")
      
    const submitHandler = e => {
        e.preventDefault() // to stop the page from refreshing i.e. the default
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input
                {...bindFirstName}
                type="text"
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                {...bindLastName}
                type="text"
                />
            </div>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default UseForm
