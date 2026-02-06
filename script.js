// debugger
// let a=2222;
// var b=8478;

// console.log(a);
// console.log(b)

// function print(){
//     var c=8484
//     console.log(c)
//     console.log("inside fn")

// }

// print()




// from lec=9
// #Asynchronous type
// console.log("First line")
// setTimeout(()=>{console.log("after 2 sec")},2000)
// console.log("Second line")

// #Synchronous  type
// console.log("First Line")
// for(let i=0;i<1000000000;i++){}
// console.log("Second Line")




// from lec=10
// setTimeout(()=>{
//     alert("Time is up!")
// },5*100)


// setInterval(()=>{
//     console.log("Hello world")
// },1000)

// const timerID=setInterval(()=>{
// console.log("set timeout")
// },1000)

// const timeroutID=setTimeout(()=>{
// clearInterval(timerID)
// },1000)

// clearInterval(timerID)
// clearTimeout(timeoutID)

// consttimerID=setInterval(()=>{
//     console.log("set timeout")
// },1000)

// const timeoutID=setTimeout(()=>{
//     clearInterval(timerID)
// },10*1000)

// let num=1;
// const id=setInterval(()=>{
//     if(num===10)clearInterval(id)
//         console.log(num)
//     num+=1
// },1000)

//    console.log("before timeout")
//    setTimeout(()=>{
//     console.log("Set timeout")
//    },0);
//    console.log("After timeout")



// from lec=4
// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         alert("Please enter a name")
//         return;
//     }   
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
    
//     name.value=""
// })




// lfrom lec=11git
// function third() {
//     console.log("Third function is running.");
// }

// function second() {
//     console.log("Second function is running.");
//     third();
// }

// function first() {
//     console.log("First function is running.");
//     second();
// }
// first();
// function sample(){
//     console.log("Inside callback")
// }

// print(sample)




// console.log("Starting homework...");
// setTimeout(){
//     console.log("Homework done")
//     console.log("Starting dinner...)
// }



// callbacks 
// function finishHomework(callback) {
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }

// function startDinner(callback) {
//     console.log("Starting dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }




// Promise Chaining Starts doHomework()
doHomework()
.then((data) => {
    console.log(data);
    return eatDinner();
})
.then((data) => {
    console.log(data);
    return goToPlayground();
})
.ctch((error) => {
    console.log("Something went wrong:", error);
})
.finally(() => {
    console.log("Day ended - Go to sleep");
});
