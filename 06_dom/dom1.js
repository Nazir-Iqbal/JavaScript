document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')

const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = 'green'

// does not return an array rather returns a NodeList
const tempLiList = document.querySelectorAll('li')
tempLiList[0].style.color = 'green'
tempLiList.forEach((item)=> item.style.color = 'blue')

const tempClassList = document.getElementsByClassName('list-item') // returns HTMLCollection
const myConvertedArray = Array.from(tempClassList) // converted it into the array for using the foreach function
myConvertedArray.forEach(function(li){
    li.style.color = 'cyan'
})