import React, { useState } from 'react'
import './Qrcode.css'

export default function ORcode() {
    // const [img,setImg]=useState("public/vite.svg")
    // const [loading,setLoading]=useState( )
    // const [qrcode,setQrcode]=useState("kums")
    // const [qrsize,setQrsize]=useState("100")
    // function generate() {
    //     setLoading(true);
    //     try {
    //         const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}&amp;size=${qrsize}x${qrsize}`;
    //         setImg(url)
    //     } catch (error) {
    //         console.log("Error message occur",error);            
    //     } finally{
    //         setLoading(false);
    //     }
    // }
    // function download(params) {

    // }
  return (
    <>
    <div>ORcode</div>
     {/* {loading &&<p>Please wait loading</p> }    
     <div className="app-container">
   <img src={img} alt=""  onMouseEnter={download}/>
<div>
    <label htmlFor="dataInput" className="input-label">
        Data for OR code:
    </label>
    <input type="text" id="dataInput" value={qrcode} onChange={(e)=>setQrcode(e.target.value)} placeholder='Enter Data For OR code' />
    <label htmlFor="sizeInput" className="input-label">
        Image size (eg.150):
    </label>
    <input type="text" id="sizeInput" value={qrsize} onChange={(e)=>setQrsize(e.target.value)} placeholder='Enter Image size' />
    <button className='generate' onClick={generate}>Generate OR code</button>
    <button className='download'>Download OR code</button>

</div> */}


    </>  )
}
