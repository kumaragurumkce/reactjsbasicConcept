import { createStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formReducer";

const store=createStore(formReducer)
export default store;




















// import { createStore } from 'redux';
// import formReducer from './reducers/formReducer';

// const store = createStore(formReducer);

// export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../slices/counterSlice';
// import formReducer from '../slices/formSlice'; // Assuming formReducer is now a slice

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;