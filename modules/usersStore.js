import SmallEngines from './smallEngines.js';
export default class UsersStore{
    static getLocalUsers =()=>{
        let users;
        if(localStorage.getItem('users') === null)
        {
            users = [];
        }
        else
        {
            users = JSON.parse(localStorage.getItem('users'));
        }
        return users;
    }
    static addUsers = (user) =>{
        let users = UsersStore.getLocalUsers();
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));


    }
}