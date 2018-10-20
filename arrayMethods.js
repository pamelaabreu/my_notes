
//METHODS

////////////    ARRAY METHODS   /////////////
console.log(`////////////    ARRAY METHODS   /////////////

`);

/*1. array.length()

    The length property of an object which is an instance of type Array sets or returns the number of elements in that array. 
    The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

*/

console.log(`___1.array.length() example___`)

let fruits = ['bananas','apples','organges','mangos']
const getLastIndexofFruits = fruits.length -1;

console.log('The length of fruits array is',fruits.length, );
console.log('The last index of fruits is', getLastIndexofFruits);
console.log('The last element of fruits is', fruits[getLastIndexofFruits]);

console.log(`______________________________________

`)

/*2. array.concat()
    The concat() method is used to merge two or more arrays. 
    This method does not change the existing arrays, but instead returns a new array.
*/

console.log(`___2.array.concat() example___`)

let names = [['pam'],'chris','diego'];
let fav = ['lol','yer','wassup']


console.log(`This is the names array [${names}], and this is the fav array [${fav}].`)
console.log(`This is concat merging both arrays [${names.concat(fav)}]`)

//How to merge an array into specific index.
let num1 = [[1]];
let num2 = [2, [3]];
let nums = num1.concat(num2);

console.log(nums); // results in [[1], 2, [3]]
num1[0].push(4); // modify the first element of num1
console.log(nums); // results in [[1, 4], 2, [3]]


console.log(`______________________________________

`)

/*3. array.isArray()
    Array.isArray() method determines whether the passed value is an Array.
*/

console.log(`___3.array.isArray() example___`)

console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray('pamela'))

let isItAnArray = arr => {

    if (Array.isArray(arr)){
        return 'Its an array'
    }
    return 'Its not an array'
}

console.log(isItAnArray([1,2,3,4,5]))
console.log(isItAnArray('pamela'))


console.log(`______________________________________

`)

/*4. array.of()
    Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
*/

console.log(`___4.array.of() example___`)

console.log(Array.of(7))
console.log(Array.of('pa','ma','da'))

console.log(`______________________________________

`)

/*5. array.filter()
    The filter() method creates a new array with all elements that pass the test implemented by the provided function, can only pass one function.
*/

console.log(`___5.array.filter() example___`)

let randomWords = ['pizza','sushi','burgers','rice','lol','pa','car','6666','123456'];
let filterResults = randomWords.filter(words => words.length >= 7);
console.log(filterResults) //Outputs: 'burgers'

console.log(`______________________________________

`)

/*6. array.forEach()
    The forEach() method executes a provided function once for each array element.
*/

console.log(`___6.array.forEach() example___`)

let array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

let pamsNumber = ['one','two','three','four','five'];

const findNum = pamsNumber.forEach( element => {
    if (element.length === 3){
        return console.log('three letter word')
    }
    return console.log('not three letter word')
})

console.log(findNum)



console.log(`______________________________________

`)

/*7. array.map()
    The map() method creates a new array with the results of calling a provided function on every element in the calling array.
*/

console.log(`___7.array.map() example___`)

let days = ['saturday', 'monday', 'sunday', 'friday'];

const isItaWeekendDay = days.map(day => {
    if(day.toLocaleLowerCase() === 'saturday' || day.toLocaleLowerCase() === 'sunday'){
        return `${day} is a weekend day!`
    }
    return `${day} its not a weekend day.`
});

console.log(isItaWeekendDay); 


let array6 = [1, 4, 9, 16];

const map1 = array6.map(x => x * 2); // pass a function to map

console.log(map1); // expected output: Array [2, 8, 18, 32]

console.log(`______________________________________

`)

/*8. array.pop()
    Remove the last item at the end of an array.

     Mutate initial array.
    .pop() does not take any arguments, it simply removes the last element of newItemTracker.
    .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
    .pop() is a method that mutates the initial array.
*/

console.log(`___8.array.pop() example___`)

const itemTracker = ['item 0', 'item 1', 'item 2'];
const removeFromEndOfArray = itemTracker.pop();

console.log(itemTracker); //Output: ['item 0', 'item 1'];
console.log(removeFromEndOfArray); //Output 'item 2'

console.log(`______________________________________

`)

/*9. array.push()
    Method adds one or more elements to the end of an array
    Returns the new length of the array.
    Mutate initial array.

*/

console.log(`___9.array.push() example___`)

const candy = ['snickers', 'jolly ranchers', 'kit-kat'];
const addtoEndOfArray = candy.push('snickers','twix','airheads');

console.log(candy); //Output: ['snickers', 'jolly ranchers', 'kit-kat','snickers','twix','airheads'];
console.log(addtoEndOfArray); //Output '6'

console.log(`______________________________________

`)

/*10. array.shift()
    Method removes the first element from an array 
    Returns that removed element. 
    This method changes the length of the array.


*/

console.log(`___10.array.shift() example___`)

const clothes = ['t-shirt','jeans','skirt'];
const removeFromFrontofArray = clothes.shift();

console.log(clothes); //Output: ['jeans','skirt'];
console.log(removeFromFrontofArray); //Output 't-shirt'

console.log(`______________________________________

`)

/*11. array.unshift()
    Method adds one or more elements to the beginning of an array 
    Returns the new length of the array.


*/

console.log(`___11.array.shift() example___`)

const colors = ['white','grey','black'];
const addToFrontofArray = colors.unshift('blue','red','yellow');

console.log(colors); //Output: ['blue','red','yellow','white','grey','black'];
console.log(addToFrontofArray); //Output 6

console.log(`______________________________________

`)


/*12. array.slice()
    Method returns a copy of a portion of an array into a new array object selected from begin to end (end not included). 
    The original array will not be modified.


*/

console.log(`___12.array.slice() example___`)

const dogs = ['white dog','grey dog','black dog','red dog','blue dog'];
const slice = dogs.slice(2);

console.log(dogs); //Output: ['blue','red','yellow','white','grey','black'];
console.log(slice); //Outputs element from index, ['black dog','red dog','blue dog']
console.log(dogs.slice(1,2)) //Outputs ['grey dog']
console.log(dogs.slice(1,2+1)) //Outputs ['grey dog','black dog']

console.log(`______________________________________

`)

//indexOf
//toString
//sort
//reverse
//join



