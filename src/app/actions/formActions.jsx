export const UPDATE_FORM='UPDATE_FORM'
export const SUBMIT_FORM='SUBMIT_FORM'



export const updateForm=(field,value)=>({
        type: UPDATE_FORM,
        payload: {field,value}
})
export const submitForm=(formdata)=>({
        type:SUBMIT_FORM,
        payload: formdata
})


























// export const UPDATE_FORM='UPDATE_FORM';
// export const SUBMIT_FORM='SUBMIT_FORM';
// export const updateForm=(field,value)=>({
//     type: UPDATE_FORM,
//     payload: {field,value},
// })

// export const submitForm=(formData)=>({
//     type: SUBMIT_FORM,
//     payload: formData
// })