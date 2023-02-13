// const titlesArray = [
//     { id: 1, title: "Title 1" },
//     { id: 2, title: "Title 2" },
//     { id: 3, title: "Title 3" },
// ];

// const postsArray = [
//     { id: 1, post: "Post 1" },
//     { id: 3, post: "Post 3" },
//     { id: 2, post: "Post 2" },
// ];

// const newArr = [...titlesArray,...postsArray]
// console.log(newArr)
// //Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "Post 1" },
//     { "id": 2, "title": "Title 2", "post": "Post 2" }, 
//     { "id": 3, "title": "Title 3", "post": "Post 3" }
// ]

// for (var i =1;i <= 70; i++){
//     if( i % 3=== 0 && i % 5 === 0){
//         console.log("foobar")
//     }else if (i % 3 === 0 ){
//         console.log("fooo")
//     }else if (i % 5 === 0){
//         console.log("bar")
//     }else{
//         console.log(i)
//     }
// }

let firstMap = {a: 'a', b: 'b'}
let secondMap = firstMap;

secondMap.b = "c"
console.log(firstMap)