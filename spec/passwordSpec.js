describe('password_is_valid', function(){
    it('should check if password contains only lowercase', function(){
        let check = password_is_valid('HELLO');
        expect(check).toBe(false);
    })
    it('should check if password contains uppercase', function(){
        let check = password_is_valid('hello');
        expect(check).toBe(false);
    })
    it('should check if password contains numbers', function(){
        let check = password_is_valid('Hello012');
        expect(check).toBe(true);
    })
    it('should check if password longer than 8 numbers ', function(){
        let check = password_is_valid('Hello012');
        expect(check).toBe(true);
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