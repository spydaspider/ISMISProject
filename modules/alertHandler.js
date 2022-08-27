export default class AlertHandler{
    static alertLogin =(message,status)=>{
      if(status === 'error'||status === 'success')
        {
            const loginMsg = document.querySelector('.login-msg');
            loginMsg.textContent = message;
            if(status === 'success')
            {
            loginMsg.style.backgroundColor = "#03aa46";
            }
            else
            {
                loginMsg.style.backgroundColor = "#dd0202";
            }
        }
        
    } 
    static alertNewAccount =(message,status)=>{
        if(status === 'error'||status === 'success')
          {
              const createMsg = document.querySelector('.create-msg');
              createMsg.textContent = message;
              if(status === 'success')
              {
              createMsg.style.backgroundColor = "#03aa46";
              }
              else
              {
                  createMsg.style.backgroundColor = "#dd0202";
              }
          }
          
      } 
}