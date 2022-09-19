import React from 'react'
import "./style.css"

const App = () => {
  return (
    <div className='container'>
        <div className="wrapper">
            <div className="title">
            <h1 className="heading">
                Welcome
            </h1>
            <p className="para">
                This is form validation in react
            </p>
            </div>
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
                <div className="input-block">
                    <label 
                    htmlFor="password"
                    className='input-label'
                    >Password
                    </label>
                    <input 
                    type="password"
                    autoComplete='off'
                    name='password'
                    id='password'
                     />

                </div>
                <div className="input-block">
                    <label 
                    htmlFor="confirmPassword"
                    className='input-label'
                    >Confirm Password
                    </label>
                    <input 
                    type="password"
                    autoComplete='off'
                    name='confirmPassword'
                    id='confirmPassword'
                     />

                </div>
            </form>
        </div>
    </div>
  )
}

export default App
