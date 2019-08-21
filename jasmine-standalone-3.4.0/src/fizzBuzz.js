function FizzBuzz(){

};
  
  FizzBuzz.prototype.play = function(number) {
    if (this._divisbleBy(15, number)) { 
      return "Fizzbuzz";
    } else if (this._divisbleBy(5, number)){
      return 'Buzz';
    } else if (this._divisbleBy(3, number)){
      return 'Fizz';
    } else {
      return number;
    }
  }
  FizzBuzz.prototype._divisbleBy = function(divisor, number) {
    return number % divisor === 0;
  }