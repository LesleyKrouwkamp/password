describe('odd numbers', function(){
    it('should return odd numbers', function(){
        var nums = [1,3,2,4,9,64,12,10,11];
        let add = evenNumbers(nums);
        expect(add/2).toBe(24);
    })
    
 })