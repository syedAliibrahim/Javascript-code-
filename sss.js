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


const titles = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
];

const postsArray = [
    { id: 1, post: "Post 1" },
    { id: 3, post: "Post 3" },
    { id: 2, post: "Post 2" },
];


// const combinedArray = titles.map((title) => {
//     const post = postsArray.find((post) => post.id === title.id);
//     return { id: title.id, title: title.title, post: post.post };
// });
// console.log(combinedArray);

// const result = titles.map(title => {
//     const post = postsArray.find(post => post.id === title.id);
//     return { ...title, post: post.post };
// });
// console.log(result)

// const outputArray = [];

// titles.forEach(title => {
//     const post = postsArray.find(p => p.id === title.id);
//     if (post) {
//         outputArray.push({
//             ...title,
//             ...post
//         });
//     }
// });


// console.log(outputArray);
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

// let firstMap = {a: 'a', b: 'b'}
// let secondMap = firstMap;

// secondMap.b = "c"
// console.log(firstMap)

// const arr =[
//     { id: 1, post: "Post 1" },
//     { id: 3, post: "Post 3" },
//     { id: 2, post: "Post 2" },
// ];
// const ll = arr.find( (it) => it.id==='3' )
// console.log(ll.post)

// const post = arr.find((post) => post.id == title.id);
// console.log(post)

// let a = 5;
// let b = 10;
// let c = 5;

// // Comparison operators
// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a === c); // true
// console.log(a !== b); // true
// console.log(b > a); // true
// console.log(b >= a); // true
// console.log(a < b); // true
// console.log(a <= c); // true

// // Logical operators
// console.log((a == c) && (b > a)); // true
// console.log((a === b) || (b > a)); // true
// console.log(!(a == b)); // true
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// function sum(x) {
//     if (arguments.length == 2) {
//       return arguments[0] + arguments[1];
//     } else {
//       return function(y) { return x + y; };
//     }
//   }
// console.log(sum(2,3));   
// console.log(sum(2)(3));  
// console.log(1 +  "2" + "2");//122
// console.log(1 +  +"2" + "2");//7
// console.log(1 +  -"1" + "2");//2
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//ab2
// console.log( "A" - "B" + 2);//ab2

// console.log(1 || 4);
// console.log(1 ||5 );
// console.log(0 && 5) ;
// console.log(1 && 2 );
// var a=-14;
// var b=-"54";
// console.log(20 === 19)
// const cites=["ff","lok","oo","kk"];
// const low=cites.map((ci)=>ci.toUpperCase());
// console.log(low)

// const ages =[25,30,35,40,45];
// const cites =["sd","ew","po","ytr","mnmn"]
// const ageGre = ages.filter((age) => (age>30));

// console.log (ageGre)

// let countlength =cites.map(we=>we.length)
// console.log(countlength)

// let people =[
//     {name:"aa",age:8},
//     {name:"er",age:10},
//     {name:"fgg",age:25},
//     {name:"poj",age:35},
//     {name:"kkv",age:55},
// ]
// // let listt= people.filter(people=>people.age>50 || people.name=='er');
// // console.log(listt)

// let sum = people.reduce((total,person)=>total+person.age,0)
 
//   let kk= people.reduce((total,person)=>total+person.name,"")
// console.log(sum)
// console.log(kk)

// let myVar = foo;
// function foo() {
//     return 5;
//   }
//   console.log(foo)
// let sl ='jkjkljlk';
// let arr=['lok',[0,2,'fg'],'sdsd','fdf'];
// console.log(arr[1][2])


// let a='kkjknkmnknkn';
// let newstr=a.slice(0,3)+'n'
// console.log(a)

//Closure


// function abc (){
//     var pi =1;
//     return function(){
//         console.log(++pi)
//     }
// }
// var counter = abc();
// counter() 
// counter()
// counter()
// abc()()

//Recursion

// function writeData(data,times){
//     document.write(data);
//     if (times> 0){
//         writeData(data,times -1)
//     }
// }
// writeData("hello",5)

// function factorial (num){
//     if(num > 1){
//         return num *factorial (num -1)
//     }
//     return 2
// }
// console.log (factorial(4))


///closures

// let abc =4  //global scope
// function print(){

//     // let def =14;   ///local scope
//     // console.log(def);

//     return function (jjj){  //anoymous function
//         console.log(def +jjj)
//     }
// }

// console.log(abc)

// let innerFunction = print();
// let innerFunction2 = print();
// innerFunction()
// innerFunction()


// function saveUrl (url){
//     return function (){
//         fetch (url)
//         .then(response => response.json())
//         .then(json => console.log(json))
//     }
// }

// // save url
// let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos/15")

// makesRequest();
// makesRequest();

// var sum =function(a){
//     console.log("live "+a);
//     var c=4;
//     return function (b){
//         return a+b+c;
//     }
// }
// var store = sum(2);
// console.log(store(5))


// let sum =function(a,b,c){
//     return {
//         getSumTwo:function(){
//             return a+b;
//         },
//         getSumThree:function(){
//             return a+b+c;
//         }
//     }
// }
// let store=sum(3,4,5);
// console.log(store.getSumTwo())
// console.log(store.getSumThree())

// function outer (){
//     const sname='outer-F'
//     function inner(){
//        console.log(`hi i inner   ${sname}`)
//     }
//     function sayHow(){
//         console.log(`${sname} secondInner`)
//     }
//     inner()
//     sayHow()
// }
// outer()


// string concat

// var a="jj";
// var b ="kk";
// var se= a  + b;
// console.log(se)

// // indexof

// var n="jhdwerg";

// var h=n.indexOf('g')
// console.log(h)


///Array Push last main add hoga return value {jo puch ho wa hai} // ek zada Add hog
//   let j =["ali","hj","kj"]
//   let u =j.push("po","klk")
//   console.log(u)

        //pop ek zada Delete nhi hoga
        // let a =[4,5,6,7,8,9,];
        // let h =a.pop();
        // console.log(h)

        ////////Splics function hata ka liya use hota hai 
        //array return karta hai

        // let e =[2,5,6,9,8,7,1,2,3];
        // let i=e.splice(1,1,"jk")
        // console.log(i,e)



        //slpice return main 2 value lata hai Example:2 se lo 5 tak 
        //output :2,3,4

        // let kk=["oo","jkj","yyy",4,5,6,7,8,9]
        // let pp=kk.slice(2,5)
        // console.log(kk,pp)

        ////Reverse Array

        // let a =["asd","lop","ytr","wew"];
        // let a="ahmed"
        // let out =a.reverse();
        // console.log(out,a)

        arrs =[1,2,3,4,5,6,7];
        ner=[];
        // for(let i=0;i<arr.length; i++){
        //     console.log(arr[1]);

        //     ner.push(arrs{i}+1)

        //     }
        // console.log(arrs)
        // function My(item){
        //     console.log(item)
        // }

        // arrs.map(My)


        awa=[
            ["ali","lname",1],
            ["kkkk","lname",2],
            ["ppppp","lname",3],
            ["ttt","lname"]
        ]

        lol=[1,2,3,4,5,6,7,8,9,]
        // let nerr=arrs.map((item)=>{
        //     console.log(arrs)
        //     if(item !=1){
        //         return item*item
        //     }
        // })

     

        
        //  let my = awa.map((a,b)=>{
        //     return {key:a,b}
        // })
        // console.log(awa)
        // console.log(nerr)
        // console.log(arrs)

        
        
        


