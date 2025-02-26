import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateForm,submitForm} from './app/actions/formActions';
import axios from 'axios';
export default function FormApp() {
    const [showData,setData]=useState(null)
   const  [loading,setLoading]=useState(false);
   const [error,setError]=useState(null);
    const formData=useSelector((state)=> state)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
    const {name,value}=e.target;
    dispatch(updateForm(name,value))
   }
   const checkedHandleChange=(e)=>{
      const {name,checked}=e.target;
    dispatch(updateForm(name,checked))
   }
 const handleSubmit=async(e)=>{
     e.preventDefault();
      setLoading(true);
      setError(null)
      try {
        const response=await axios.post('https://example.com/api/submit',formData,{
          headers:{
            'Content-Type':'application/json',
          }
        })
        console.log('API response:',response.data);
        dispatch(submitForm(formData))
        setData(formData)
        dispatch(resetForm());
      } catch (error) {
           setError('Error submitting form. Please try again.');
           console.error('Error submitting form:',error);
      }
      finally{
        setLoading(false)
      }
  
 }
  return (
    <>
    <div>FormApp</div>
    {error && <p style={{color:'red'}}>{error}</p> }
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input type="text" name='name' onChange={handleChange} value={formData.name} />
            </div>
            <div>
              <label>ID</label>
                <input type="number" name='number' onChange={handleChange} value={formData.number} />
            </div>
            <div>
              <label>Developer</label>
                <input type="checkbox" name="developer" checked={formData.developer} onChange={checkedHandleChange} />
            </div>
            <button type='submit' disabled={loading}>{loading?'Submitting':'Submit'}</button>
          </form>
          {
            showData && (
              <div>
                <p>Name: {showData.name}</p>
                <p>Number: {showData.number}</p>
                <p>Developer: {showData.developer ? 'Yes' : 'No'}</p>
              </div>
            )
          }
    </>
  )
}




























// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateForm, submitForm } from './app/actions/formActions';

// const FormApp = () => {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state );
//   const [showData, setShowData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateForm(name, value));
//   };
//   const handleCheckboxChange=(e)=>{
//     const {name,checked}=e.target;
//     dispatch(updateForm(name,checked));
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(submitForm(formData));
//     setShowData(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <div>
//             <label>
//           <input type="radio" name='gender' value="male" checked={formData.gender === "male"}
//             onChange={handleChange} />
//            Male </label>
//            <label>
//             <input type="radio" name='gender' value="female" checked={formData.gender === 'female'} 
//             onChange={handleChange} />
//             Female
//            </label>
//            <label>
//            <input type="radio" name='gender' value="other" checked={formData.gender === 'other'} 
//             onChange={handleChange} />
//             Other
//            </label>
//             </div>
//         </div>
//         <div>
//           <label>
//             Favorite Color:
//           </label>
//             <select name='favoriteColor' value={formData.favoriteColor} onChange={handleChange} >
//                 <option value="">Select a color</option>
//                 <option value="red">Red</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="yellow">Yellow</option>
//             </select>
//           </div>
//           <div>
//             <label>
//               Subscribe to newsletter:
//             </label>
//             <input type="checkbox" name='subcribe' checked={formData.subscribe} onChange={handleCheckboxChange} />
//             </div>
//             <div>
//               <label>Comments:</label>
//               <textarea name="comments" value={formData.comments} onChange={handleChange} />
//             </div>
//         <button type="submit">Submit</button>
//       </form>

//       {showData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p><strong>Name:</strong> {showData.name}</p>
//           <p><strong>Username:</strong> {showData.username}</p>
//           <p><strong>Company Name:</strong> {showData.companyName}</p>
//           <p><strong>Gender:</strong>{showData.gender}</p>
//           <p><strong>Favorite:</strong>{showData.favoriteColor}</p>
//           <p><strong>Subcribed:</strong>{showData.subcribed ? 'Yes' : 'No'}</p>
//           <p><strong>Comments:</strong>{showData.comments}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormApp;
