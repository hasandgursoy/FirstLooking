import getData from "./myModule.js";



try {
    
    
    const veri = await getData(1);
    console.log(veri);

} catch (e) {
    console.log(e);
}
