let assert = require("assert");
var generateRandNum = require('../game');

describe('this test if  the number guessed by the user is equal to the one generated by the machine' , function()
{
    it('If the number guessed by the user is below the one generated by the machine, return the message “Your guess is too low” ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          };

          assert.equal('100', generateRandNum('100'));

      
    });


    it('If the number guessed by the user is above the number generated by the machine, return the message “Your guess is too high”. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          };

      
    });

    it('If the number generated by the machine is the number guessed by the user, return the message “correct”. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          };
      
    });


    it('If the input is less than 1, return the message Error Number out of range. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          };

      
    });

    it('If the input is greater than 100, return the message Error Number out of range. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          };

      
    });

    it('If the hint button is presssed, return the message with the hit. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          }; 
    });
    

    it('If the refresh button is presssed, Generate new Random Number. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          }; 
    });

    it('If the chances are greater than 5, return message with the correct number. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          }; 
    });

    it('If the chances are greater than 5, New Game starts. ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          }; 
    });

    it('If the number is input more than once, return the message "input a different number". ' , function(){
        
        var generateRandNum = function (){
            target = Math.floor(Math.random() * 100 + 1);
          }; 
    });
    
    
});

