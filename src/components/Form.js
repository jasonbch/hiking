import React from "react"

const Form = props => (
    <form onSubmit={props.getTrails}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="state" placeholder="state..."/>
        <input type="text" name="distance" placeholder="distance..."/>
        <button>Get Trails</button>
    </form>
)

export default Form