// Code your solution here


/* findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
 */


/* describe('index.js', function () {
    describe('findMatching()', function () {
      it('returns all drivers that match the passed in name', function () {
        const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
  
        expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
        expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
      }); */
  



function findMatching(array,name) {
    return array.filter(element => name.toUpperCase() === element.toUpperCase())
    
//    driver === name  
}


function fuzzyMatch(array, name) {
    return array.filter(
      (possibleMatch) =>
        possibleMatch.toUpperCase().indexOf(name.toUpperCase()) === 0
    );
  }


  function matchName(array, name) {
    return array.filter((driver) => driver.name === name);
  }



/* const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
const result = array.filter(function(currentValue, index, arr), thisValue)

 */









 /*  function findMatching(driver1, driver2) {
    for (const firstName of driver1 && driver2) {
      return firstName.firstName;
    }
  }

  findMatching('Bobby', 'Sammy') */


  /* function findMatching(drivers, name) {
    for (let first of drivers) {
      if (name(first)) {
          console.log(first.firstName)
        // return first.firstName;
      }
    }
  }
  
  findMatching(drivers, function (user) {
    return user.firstName === "Bobby" && user.firstName === "Sammy";
  });  */


  /* function findMatching(drivers) {
    for (const person of drivers) {
      return person.firstName;
    }
  }
 */












