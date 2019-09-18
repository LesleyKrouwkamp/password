
    function password_is_valid(password){

        let validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,}$)/
       
        let result = validPass.test(password) 
       
        try {
       
          if(result == false) throw('password must contain uppercase and lowercase letters and at least one number');
       
        } catch (error) {
       
          console.log('Please note ' + error);
       
        }
      
        return result;
       }



       function password_is_ok(password) {

        let expect1 = /^[A-Za-z0-9]{9,}$/;
        let expect2 = /^(?=.*[A-Z])[A-Z]+/;
        let expect3 = /^(?=.*[a-z])[a-z]+/;
        let expect4 = /^(?=.*[0-9])[0-9]+/;
      
        if (expect1.test(password) === true && expect2.test(password) === true) {
      
          return 'password is valid';
      
        } else
      
        if (expect1.test(password) === true && expect3.test(password) === true) {
      
          return 'password is valid';
      
        } else
      
        if (expect1.test(password) === true && expect4.test(password) === true) {
      
          return 'password is valid'
      
        } else{
      
          throw 'password is invalid'
      
        }
    }