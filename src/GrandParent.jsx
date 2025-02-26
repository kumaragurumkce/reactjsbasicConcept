import React from 'react'
import Parent from './Parent';
export default function GrandParent(props) {
    const datag="Message from grand parent";

  return (
    <>
    <div>GrandParent</div>   
        {/* <Parent datag={data_g} /> */}
    </>
  )
}
