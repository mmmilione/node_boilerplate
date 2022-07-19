const checkEmail = email => {
    const reg = /^([a-z\d\._-]{2,25})@([a-z\d-]{2,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (reg.test(email) == true) return true;
    return false;
}

const checkMsg = msg => {
    const reg = /^[^<>]{1,500}$/i ;
    if(reg.test(msg) == true) return true;
    return false;
}

export { checkEmail, checkMsg }

