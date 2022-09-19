import React from 'react'
import "./style.css"

const App = () => {
  return (
    <div className='container'>
        <div className="wrapper">
            <h1 className="heading">
                Welcome
            </h1>
            <p className="para">
                This is form validation in react
            </p>
            <form action="">
                <div className='input-block'>
                    <label 
                    htmlFor="name" className='input-label'>
                    Name
                    </label>
                    <input
                     type="name" 
                     autoComplete='off' 
                     name='name' 
                     id='name' />
                </div>
                <div className='input-block'>
                    <label 
                    htmlFor="email" className='input-label'>
                        Email
                    </label>
                    <input 
                    type="email" 
                    autoComplete='off'
                    name="email" 
                    id="email" />

                </div>
            </form>
        </div>
    </div>
  )
}

export default App
