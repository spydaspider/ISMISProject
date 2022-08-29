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
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if ((loginName.value === '') || (loginPassword.value === '')) {
    AlertHandler.alertLogin('Enter Username and Password', 'error');
  } else {
    // proceed

    AlertHandler.alertLogin('Login was successful', 'success');
  }
});
createAccount.addEventListener('click', (e) => {
  e.preventDefault();
  if ((newName.value === '') || (newPassword.value === '') || (passwordAgain.value === '')) {
    AlertHandler.alertNewAccount('All Fields required', 'error');
  } else if (newPassword.value !== passwordAgain.value) {
    AlertHandler.alertNewAccount('Passwords do not match', 'error');
  } else {
    // proceed
    const users = UsersStore.getLocalUsers();
    /* const hashedPassword = md5(newPassword); */
    const user = new Users(users.length, newName.value, newPassword.value);
    UsersStore.addUsers(user);

    AlertHandler.alertNewAccount('Account was created successfully', 'success');
  }
});

// handle invents for the work space.
const logo = $('.logo');
const home = $('.home');
/* const about = document.querySelector('.contact');
 */// side nav classes
const addNew = $('.add-new');
/* const storeRoom = document.querySelector('.store-room');
 */
/* const sell = document.querySelector('.sell');
 *//* const queryRecords = document.querySelector('.query-records');
const dataTransfer = document.querySelector('.data-transfer'); */
// works space classes
const addItems = $('.add-items');
const homeContent = $('.home-content');
addNew.on('click', function(){
  $(addItems).show();
  $(homeContent).hide();
});
// If user clicks the logo
logo.on('click', () => {
  $(addItems).hide();
  $(homeContent).show();
});
// If user clicks home button
home.on('click', () => {
  $(addItems).hide();
  $(homeContent).show();
});
// If user clicks the add form button.
const addForm = document.querySelector('.add-button');
addForm.addEventListener('click', (e) => {
  e.preventDefault();
  const itemName = document.querySelector('.item-name');
  const itemNum = document.querySelector('.item-num');
  const costPrice = document.querySelector('.cost-price');
  const sellingPrice = document.querySelector('.selling-price');
  const msgClass = document.querySelector('.add-item-message');

  if (itemName === '' || itemNum.value === '' || costPrice.value === '' || sellingPrice === '') {
    AlertHandler.generalAlerts('All fields required', 'error', msgClass);
  } else if (Number(costPrice.value) > Number(sellingPrice.value)) {
    AlertHandler.generalAlerts('Detected Costprice greater the selling price', 'error', msgClass);
  } else {
    AlertHandler.generalAlerts('Item added successfully.', 'success', msgClass);
    SmallEngines.clearField(itemName);
    SmallEngines.clearField(itemNum);

    SmallEngines.clearField(costPrice);

    SmallEngines.clearField(sellingPrice);


  }
});
//Use jquery to animate the menu.
const menuContent = $('.menu-content');
$('.mobile-menu').on('click', function(){
    $(menuContent).toggle(500);

})
 $('.item-add').on('click', function(){
  $('.add-items').css({"display": "block"});
  $('.home-content').css({"display": "none"});
  $(menuContent).toggle(500);
})

