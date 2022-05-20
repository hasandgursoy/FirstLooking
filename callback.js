// setTimeout(() => {
//     console.log("Merhaba");
// },5000)

// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım");
// },1000)

// const sayHi = (cb) =>{

//     cb();
// };

// sayHi(() => {
//     console.log("Hello");
// })

// Endpointlere istekde bulunmak için fetch
// Bu kirli bir yapı daha temiz hali async-await yapısı var.
import fetch from 'node-fetch';

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("User yüklend, , "+ users);

//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((data) => data.json())
//             .then((posts) => console.log("Postlar yüklendi ,"+posts))
//     });

// Async-await
// Yukarıdaki yapının aynısı ancak then() yapısı ile uğraşmadık ve bütün herşey iç içe girmek zorunda kalmadı.

// async function getData()
// {

//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log(users);

//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     console.log(post);
// }

// getData();

// npm install axios = fetch yerine kullanıcaz.
// react de axios kullanıcaz.
import axios from 'axios';

// (async () =>
// {

//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(users);
//     console.log(post1);

// })();

// Promise mekanizması = Bildiğin try-catch

const getComments = () =>
{
    return new Promise(async(resolve, reject) =>
    {
        const {data : users} = await axios("https://jsonplaceholder.typicode.com/users") 
        resolve(users);
    })
}

// getComments()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));


const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
    }); 
}

// getPost(1)
//     .then((data) => console.log(data))
//     .catch((e)=> console.log(e));



// Eğer then ve cath den kurtulmak istiyorsak 

// (async () => {
//     try {
//         const post = await getPost(1);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }
    
    
// })();

// Promise.All()
(async() => {
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");

})();

Promise.all([getPost(1),getComments()]).then(console.log).catch(console.log);