import React from 'react'

export default function About(props) {
    console.log(props)
    return (
        <div>
            <h1>About Page</h1>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}
