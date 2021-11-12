export function setUserSession(data:any){
    return localStorage.setItem('userOnboardData', JSON.stringify(data));
}

export function getUserSession(){
    return localStorage.getItem('userOnboardData');
}

export function removeUserSession(){
    return localStorage.removeItem('userOnboardData');
}


