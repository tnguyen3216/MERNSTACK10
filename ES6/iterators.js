//Filter, Map, Some and Reduce : Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Thor"}
];

//1. List me the persons saved by Captain America

let pplSavedByCA = personsList.filter((person)=> person.savedby == "CaptainAmerica")

//console.log(pplSavedByCA)
//console.log(personsList)

//2. Give me names of the persons saved by IronMan

let nameListSavedByIronMan = personsList.map((person)=> person.savedby == "IronMan" ? person.name : "").filter(p=>p!="")

//console.log(nameListSavedByIronMan)

let nameListSavedByIM = personsList.map((person)=> person.savedby == "IronMan" ? 
                        {"Citizen " : "Sir " + person.name }: "").filter(p=>p!="")

//console.log(nameListSavedByIM)
//console.log(personsList)


//3. Is there anyone savedby thor 
//some behaves as a short circuit as soon as it gets first value will return
let savedByThor = personsList.some(pern=>pern.savedby==="Thor")

//console.log(savedByThor)


//4. Give me the count of persons saved by each super hero

let countSavedByEach = personsList.reduce((prevVal, currVal, index, array)=>{
    console.log(prevVal)
    console.log(currVal)

    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;

    return prevVal;
}, new Set())// {} []

console.log(countSavedByEach)



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present