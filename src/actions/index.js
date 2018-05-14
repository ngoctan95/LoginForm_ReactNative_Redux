import firebase from 'firebase';
export const emailChanged=(text)=>{
    return {
        type:'email_changed',
        payload:text
    }
}

export const passwordChanged=(text)=>{
    return {
        type:'password_changed',
        payload:text
    }
}
export const loginSuccess=(user)=>{
    return {
        type:'LOGIN_SUCCESS',
        payload:user
    }
}
export const createUserSuccess=(user)=>{
    return {
        type: 'CREATE_SUCCESS',
        payload:user
    }
}
export const errs=(err)=>{
    return {
        type:'ERROR',
        payload:err
    }
}
export const loginUser=({email,password})=>{
   return(dispatch)=>{
       firebase.auth().signInWithEmailAndPassword(email,password)
       .then(user =>{
           dispatch(loginSuccess(user));
       })
       .catch((()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>{
            dispatch(createUserSuccess(user));
            })
            .catch(err=>{
                dispatch(errs(err));
            })
       }));
   }
}