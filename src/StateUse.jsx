import React, { useState } from 'react'
import UseState1 from './UseState1'

export default function StateUse() {

    const [formdata,SetFormData]=useState(null)

const handleformUpdate=(data)=>{
SetFormData(data);
}
    return (
    <>
    <div>StateUse-Parent</div>
    <UseState1 OnFormSubmit={handleformUpdate} />

    {formdata && (
        <div>
<p>Name: {formdata.name}</p>
<p>Name: {formdata.name}</p>
        </div>
        
        ) }
    </>

  )
}
