function addToZero(arr) {
    let answer = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                answer = true
            }
        }
    } return answer
}

//AddtoZero would have a runtime of O(n^2) and spce complexity of O(n)


//console.log(addToZero([]));
// -> False
//.log(addToZero([1]));
// -> False
//console.log(addToZero([1, 2, 3]));
// -> False
//console.log(addToZero([1, 2, 3, -2]));
// -> True


function hasUniqueChars(str) {
    let answer = true
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if ((i != j) && (str[i] === str[j])) {
                answer = false
            }
        }
    } return answer
}

//hasUniqueChars would have a runtime of O(n^2) and spce complexity of O(n)

// console.log(hasUniqueChars("Monday"));
// -> True
// console.log(hasUniqueChars("Moonday"));
// -> False
// console.log(hasUniqueChars("Momday"));
// -> False

function isPangram(str) {
    let answer = 0
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if ((i != j) && (str[i] === str[j]) && ((/[a-zA-Z]/).test(str[j]) === true)) {
                answer += 1
            }
        }
    } if (answer === 26) {
        return true
    } else {
        return false
    }
}

//isPangram would have a runtime of O(n^2) and spce complexity of O(n)

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True
// console.log(isPangram("I like cats, but not mice"));
// -> False)

function findLongestWord(arr) {
    let longestLength = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length
        }
    } return longestLength
}

//findLongestWord would have a runtime of O(n) and spce complexity of O(1)

console.log(findLongestWord(["hi", "hello", "hey"]));
// -> 5)