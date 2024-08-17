 export const checkValidData = (email,password ,fullName) => { 
    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const nameRegex = /^[a-zA-Z ]{2,30}$/.test(fullName);

    if(!emailRegex){
        return "Invalid Email";
    }
    if(!passwordRegex){
        return "Invalid Password";
    }
    if(!nameRegex){
        return "Invalid Name";
    }

    return null;
 }