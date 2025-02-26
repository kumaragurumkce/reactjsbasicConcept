import { UPDATE_FORM,SUBMIT_FORM } from "../actions/formActions";

const initialState={
    name:'',
    number:'',
    developer:false,
}

const formReducer=((state= initialState,action)=>{
   
    switch (action.type) {
        case UPDATE_FORM:
            return{
                ...state,
                [action.payload.field]:action.payload.value
            }
        case SUBMIT_FORM:
            console.log('FORM_Submission',action.payload);
            return initialState;
        default:
            return state;
    }

})
export default formReducer;

























// import { UPDATE_FORM,SUBMIT_FORM } from "../actions/formActions";

// const initialState={
//     name:'',
//     username:'',
//     companyName:'',
//     gender:'',
//     favoriteColor:'',
//     subcribe:'false',
//     comments:''
// };
// const formReducer=(state = initialState,action)=>{
//     switch (action.type) {
//         case UPDATE_FORM:
//             return{
//                 ...state,
//                 [action.payload.field]:action.payload.value,
//             }
//         case SUBMIT_FORM:
//             console.log('FORM SUBMITTED',action.payload);
//             return initialState;
//         default:
//             return state;
//     }
// };
// export default formReducer;