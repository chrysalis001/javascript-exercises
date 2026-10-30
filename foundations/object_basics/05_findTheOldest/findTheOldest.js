/*
get the people list
sort for age = people.sort((age(a), age(b) => age(a) - age(b)))
return people[0]

age(a)
    if alive i.e. Number.isInteger(a.death) == false
        death = Date.getFullYear()
    return age = death - birth
*/

const findTheOldest = function(people) {
    people.sort((a, b) => age(b) - age(a));
    return people[0];
};

function age(person) {
    if ( Number.isInteger(person.yearOfDeath) == false) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
