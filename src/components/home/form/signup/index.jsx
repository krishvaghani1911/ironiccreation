import React from 'react'
import './signup.scss'

export default function Signup() {
    return (
        <div className="signup">
            <div className="container">
                <section>
                    <h1>Sign Up</h1>
                    <label htmlFor="firstName">Username</label>
                    <input type="text" name="username" id="firstName" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                    <button type="submit">Sign Up</button>
                </section>
            </div>
        </div>
    )
}
