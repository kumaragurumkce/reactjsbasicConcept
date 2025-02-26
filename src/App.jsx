import React from 'react';
 // Ensure this is the correct import path
import FormApp from './FormApp';
const App = () => {
  return (
    <div>
      <h1>React Redux Form</h1>
      <FormApp />
      
    </div>
  );
};

export default App;
// // src/App.jsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './slices/counterSlice';
// import Form from './Form.jsx'
// const App = () => {
//   // Read state from the store
//   const count = useSelector((state) => state.counter.value);

//   // Get the dispatch function
//   const dispatch = useDispatch();

//   return (
//     <div>
//         <div className="App">
//       <h1>React Redux Form</h1>
//       <Form />
//     </div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
//     </div>
//   );
// };

// export default App;
// import React,{ useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import { UserCard } from './UserCard';
// import Para from './Para';
// import ORcode from './ORcode';
// import Parent from './Parent';
// import StateUse from './StateUse';

// import Operator1 from './Operator1';
// import Operator2 from './Operator2';
// import Sample4 from './Sample4';
// import ThemeToggler from './ThemeToggler';
// import Modal from './Modal';

// import { useSelector,useDispatch } from 'react-redux';
// import {increment,decrement,increaseByAmount} from './slices/counterSlice'
// function App() {

//   const count = useSelector((state)=> state.counter.value);
//   const dispatch=useDispatch();
//   return (
//     <div>
//        <div>
//        <h1>Counter: {count}</h1>
//         <button onClick={()=>dispatch(increment())}>Increment</button>
//         <button onClick={()=>dispatch(decrement())}>decrement</button>
//         <button onClick={()=>dispatch(IncrementByAmount(5))}>Increment bt 5</button>
      
//         {/* <UserCard /> */}
//         {/* <Para /> */}

//         {/* <ORcode /> */}
//           {/* <h1>Props Demo</h1> */}
//             {/* <Parent /> */}
      
//             {/* <StateUse /> */}
//             {/*  /
//             <Operator1 />
//             <Operator2 /> */}
//         <Sample4 />
//         {/* <ThemeToggler /> */}


//       </div>
//       <p className="read-the-docs">
//            Main App
//       </p>
//     </div>
//   );
// }

// export default App;