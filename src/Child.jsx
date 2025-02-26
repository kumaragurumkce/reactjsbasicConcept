



// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const Child = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ name, email });
//   };

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// Child.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Child;

// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';

// // export default function Child({ message, user, fruits, sendParent ,sendSambar,onCountchange}) {
// //   console.log("Number from parent ", fruits);
// //   const [count,setCount]=useState(0);
// // const handleClick=()=>{
// //     const data ="Hello from child";
// //     sendParent(data)
// // }

// // const handleClickSambar=()=>{
// //    const datas=1*1

// //    sendSambar(datas)
// //    console.log("pri");
   
// // }
// // const handleSetCount=()=>{
// //   const newCount= count+1*90
// //   setCount(newCount);
// //   onCountchange(newCount)
// // }


// //   return (
// //     <>
// //     <div>
// //         <button onClick={handleClick}>Send Data Parent</button>
// //     <button onClick={handleClickSambar} > Click sambar</button>
// //       <button onClick={handleSetCount}>
// //         Click btn
// //       </button>
// //         </div>
// //       <div>Chil</div>

// //       <div>
// //         <p>{message}</p>
// //         <p>Name: {user.name}</p>
// //         <p>Age: {user.age}</p>

// //       </div>
// //       <ul>
// //         {fruits.map((fruit) => (
// //           <li key={fruit.id}>{fruit.name}</li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// // Child.propTypes = {
// //     sendParent:PropTypes.func.isRequired,
// //     sendSambar:PropTypes.func.isRequired,
// //   message: PropTypes.string,
// //   user: PropTypes.shape({
// //     name: PropTypes.string,
// //     age: PropTypes.number
// //   }),
// //   fruits: PropTypes.arrayOf(PropTypes.shape({
// //     id: PropTypes.number,
// //     name: PropTypes.string
// //   }))
// // };

// // Child.defaultProps = {
// //   message: "Default message",
// //   user: { name: "Default Name", age: 0 },
// //   fruits: []
// // };
