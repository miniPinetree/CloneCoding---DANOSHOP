//토큰관련 쿠키 저장/삭제 함수 

const getCookie = (name) =>{
    let value = "; "+document.cookie;
    let parts = value.split(`; ${name}=`);
    if(parts.length === 2){
        return parts.pop().split(";").shift();
    }
    }    
    // 쿠키에 저장하는 함수
    const setCookie = (name, value, exp = 1) => {
        let date = new Date();
        // 날짜를 만들어줍니다.
        date.setTime(date.getTime() + exp * 60 * 60 * 1000);
        // 저장!
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
      };
    
    const deleteCookie = (name) =>{
        let date = new Date("2020-01-01").toUTCString();
        console.log("expired!",date);
        document.cookie = name+"=; expires="+date;
    
    }
    
    export {getCookie, setCookie, deleteCookie};