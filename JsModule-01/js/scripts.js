'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let login = prompt('Введите login')

if(login!==null){
    let pass = prompt('Введите password');
    if (login === ADMIN_LOGIN && pass === ADMIN_PASSWORD){
        alert('Добро пожаловать!')
    }else{
        alert('Доступ запрещен!');
    } 
}else{
    alert('Отмененно пользователем!');
}






