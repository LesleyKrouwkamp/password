describe('password_is_valid', function(){
    it('should check if password contains lowercase', function(){
        expect(() => {password_is_valid("Hello1")}).toThrow(new Error("please enter a valid password"));
    })
    it('should check if password contains uppercase', function(){
        expect(() => {password_is_valid("Hello1")}).toThrow(new Error("please enter a valid password"));
    })
    it('should check if password contains numbers', function(){
        let check = password_is_valid('Hello012');
        expect(check).toBe(true);
    })
    it('should check if password longer than 8 numbers ', function(){
        expect(() => {password_is_valid("Hello1")}).toThrow(new Error("please enter a valid password"));
    })
    it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
        let check = password_is_valid('Hello1012');
        expect(check).toBe(true);
    })
    it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
        let check = function(){
            throw ('password must contain uppercase and lowercase letters and at least one number')
        };
        expect(check).toThrow('password must contain uppercase and lowercase letters and at least one number');
    })
 })