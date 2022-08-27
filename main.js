import AlertHandler from './modules/alertHandler.js';
import UsersStore from './modules/usersStore.js';
import Users from './modules/users.js';
import SmallEngines from './modules/smallEngines.js';
const loginButton = document.querySelector('.login');
const createAccount = document.querySelector('.create-account');
const loginName = document.querySelector('.username');
const loginPassword = document.querySelector('.password');
const newName = document.querySelector('.account-name');
const newPassword = document.querySelector('.pass');
const passwordAgain = document.querySelector('.pass-again');
loginButton.addEventListener('click',(e) =>{
    e.preventDefault();
    if((loginName.value === '')|| (loginPassword.value === ''))
    {
        AlertHandler.alertLogin('Enter Username and Password','error');
    }
    else
    {
        //proceed
        
        AlertHandler.alertLogin('Login was successful', 'success');

    }
})
createAccount.addEventListener('click',(e) =>{
    e.preventDefault();
    if((newName.value === '')|| (newPassword.value === '')||(passwordAgain.value === ''))
    {
        AlertHandler.alertNewAccount('All Fields required','error');
    }
    else if(newPassword.value != passwordAgain.value)
    {
        AlertHandler.alertNewAccount('Passwords do not match','error');

    }
    else
    {
        //proceed
        let users = UsersStore.getLocalUsers();
        let hashedPassword = md5(newPassword);
     const user = new Users(users.length,newName.value,newPassword.value);
     UsersStore.addUsers(user);
     SmallEngines.clearField(newName);
     SmallEngines.clearField(newPassword);
     SmallEngines.clearField(passwordAgain);   
     AlertHandler.alertNewAccount('Account was created successfully', 'success'); 

    }
    
})

//handle invents for the work space.
const logo = document.querySelector('.logo');
const home = document.querySelector('.home');
const about = document.querySelector('.contact');
//side nav classes
const addNew = document.querySelector('.add-new');
const storeRoom = document.querySelector('.store-room');
const sell = document.querySelector('.sell');
const queryRecords = document.querySelector('.query-records');
const dataTransfer = document.querySelector('.data-transfer');