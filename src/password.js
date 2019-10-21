
    function password_is_valid(password){

        let validPass1 = /^(?=.*[A-Z])(?=.{8,}$)/
        let validPass2 = /^(?=.*[a-z])(?=.{8,}$)/
        let validPass3 =/^(?=.*[0-9])(?=.{8,}$)/

        if(password == ""){
          throw new Error("please enter a password");
        }
        if(validPass1.test(password) == true || validPass2.test(password) == true ||validPass3.test(password) == true){
          return true;
        }
       
        else{
           throw new Error("please enter a valid password");
        }

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