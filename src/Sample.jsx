import React, { useState,useEffect } from 'react'

export default function Sample() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
  });
const [submitData,setSubmitData]=useState(null);
  const handleChange = (e) => {
    console.log(e.target.name,e.target.value);
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("Effect ran!");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData(formData)
    // Here, you can process the submitted data as needed.
    console.log('Form Data:', formData);
  };
  return (
    <>
    <div>Sample Form</div>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>

    {submitData &&(
      <div>
        <h3>Submitted:</h3>
<p>Name:{submitData.name}</p>
<p>Surname:{submitData.surname}</p>
 
      </div>
    )}
    </>
  )
}
