const getCookie = (name) =>{
    let value = "; "+document.cookie;
    let parts = value.split(`; ${name}=`);
    if(parts.length === 2){
        return parts.pop().split(";").shift();
    }
    }  

const getItem= (key) =>{
    const value = sessionStorage.getItem(key);
    if(key==='data')
}