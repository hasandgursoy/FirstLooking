const users = ["Mehmet", "Ahmet", "Murat","Can","Akif"];

/*
push
map
find
filter
some
every
includes
*/

// push
users.push("Ayşe");
console.log(users);
users.forEach(element =>
{
    console.log(element);
});

// map 
// verilen veriyi bozmaz yeni bir veri meydana getirir.
const newUser = users.map((item) =>
{
    return item + "s";
});

newUser.forEach((x) =>
{
    console.log(x);
});

// find

const findIt = users.find((item) => item === "Mehmet");
console.log(findIt);

// filter

const filtered = users.filter((item) => item.length > 4);
console.log(filtered);

// some 
// true-false döner

const somes = users.some((item) => item ==="Can");
console.log(somes);


// every
// array'in bütün elemanlarının şartlara uymasını bekler

const every = users.every((item) => item.length > 2);
console.log(every);

// includes
const meyveler = ["elma","armut","muz"];
const isIncludes = meyveler.includes("muz");
console.log(isIncludes); 



