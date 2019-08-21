describe('FizzBuzz', function () {
  //method statments go here
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
   });

  describe('knows when a number is', function(){
    it('divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.play(15)).toBe('Fizzbuzz');
    });
    it('returns the number if not divisible', function(){
      expect(fizzBuzz.play(2)).toBe(2)
    });
  });
});

