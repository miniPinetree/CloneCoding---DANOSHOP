//정규식으로 이메일 정합성 체크

export const emailCheck = (email) =>{
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

    return _reg.test(email); 
}
