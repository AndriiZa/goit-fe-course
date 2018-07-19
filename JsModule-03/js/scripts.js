const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

let login = prompt('Введите логин');

const  checkLoginValidity = function (login) {
   
   if (login.length >= 4 && login.length <= 16) {

        return true;
      }
}

const checkIfLoginExists = function(logins, login){
    if(logins.includes(login)){
        return true;
    }
    return false;
}


const addLogin = function(logins, login){
    
    if(login === null){
        return;
    }
    else if(!checkLoginValidity(login)){
        alert('Ошибка! Логин должен быть от 4 до 16 символов')
        return;
    }
    else if(checkIfLoginExists(logins, login)){
        alert('Такой логин уже используется!');
        return;
    }
    else{
        logins.push(login);
        alert('Логин успешно добавлен');
    }
}

addLogin(logins, login);

console.log(logins);
