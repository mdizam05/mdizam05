
// Q2...
// let personName: string= "ERIC";
// console.log(`hello ${personName} ,would you like to learn some Python today?`);


// Q3...
// lower case
// let personName: string = "Izam";
// console.log("lowercase:",personName.toLowerCase());
// //upper case
// console.log("uppercase:",personName.toLocaleUpperCase());
// //tittle case
// console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


// Q4...
// let quote: string="A person who never made a mistake never tried anything new.";
// let author: string= "Albert Einstein";
// console.log(`${author} once said  "${quote}"`);


// Q5...
// let quote: string = "A person who never made a mistake never tried anything new.";
// let famous_person: string = "Albert Einstein";
// let message = `${famous_person} once said "${quote}"`;
// console.log(message);


// Q7...
// console.log(4 + 4);
// console.log(20-12);
// console.log(2 * 4);
// console.log(40 / 5);


// Q9...
// let favouriteNumber: number= 9;
// console.log(`my favourite number is ${favouriteNumber}`);


// Q10...
//exercise 10 
// Muhammad Izam
//dated:01/03/2024
//this program simply run and just like a hello world
// console.log("hello guys! simple..."); 

//exercise 10 
// Muhammad Izam
//dated:01/03/2024
//this program simply adding the numbers just like 2+2=4
// console.log(9 + 12);


// Q11...
// let members:string[]=['Usman','Mubashir', 'Laiba', 'Ayesha','Hanzela','Izam'];
// for(let i=0;i<members.length;i++){
//     console.log(members[i]);
// }


// Q12...
// let members:string[]=['Usman','Mubashir', 'Laiba', 'Ayesha','Hanzela','Izam'];
// let message1:string=':kl uni bhi jana hai.'
// for(let i=0;i<members.length;i++){
//     console.log(members[i]+ message1);
// }


// Q13...
// let transportation:string[]=['civic ','grande','hispeed.infinity'];
// for(let i=0;i<transportation.length;i++){
//     console.log('i would like to own a ' + transportation[i])
// }


// Q14...
// let guest_list:string[]=['Ali','hanzela','Sultan'];
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam' + guest_list[i]+ '\n we invited you on Dinner tommorrow.\n\n Thankyou')
// }
// export{guest_list}


// Q15...
// let guest_list:string[]=['Ali','Taha','Sultan'];
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\n' + guest_list[i]+ '\n  we invited you on Dinner tommorrow.\n\n Thankyou')
// }
// let not_present:string="Ali";
// let new_guest:string="Prof. Ali Dad Chandio";
// guest_list[0]=new_guest;
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\n' + guest_list[i]+ '\n  we invited you on Dinner tommorrow.\n\n Thankyou')
// }
// console.log(`Mr. ${not_present} will not coming tommorrow for dinner.`);


// Q16...
// let guest_list:string[]=['Ali','Taha','Sultan'];
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\t' + guest_list[i] + '\n  we invited you on Dinner tommorrow.\n Thankyou...\n')
// }
// let not_present:string="Ali";
// let new_guest:string="Prof. Ali Dad Chandio";
// guest_list[0]=new_guest;
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\t' + guest_list[i] + '\n  we invited you on Dinner tommorrow.\n Thankyou...\n')
// }
// console.log(`Mr. ${not_present} will not coming tommorrow for dinner.`);
// guest_list.unshift('Mubashir', 'Sarim' ,'Nasir');
// for(let i=0;i<guest_list.length;i++){
//     console.log(`Respected Sir/Madam \t` + guest_list[i] + `\n  we invited you on Dinner tommorrow.\n Thankyou... \n`)
// }


// Q17...
// let guest_list:string[]=['Ali','Taha','Sultan'];
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\t' + guest_list[i] + '\n  we invited you on Dinner tommorrow.\n Thankyou...\n')
// }
// let not_present:string="Ali";
// let new_guest:string="Prof. Ali Dad Chandio";
// guest_list[0]=new_guest;
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam\t' + guest_list[i] + '\n  we invited you on Dinner tommorrow.\n Thankyou...\n')
// }
// console.log(`Mr. ${not_present} will not coming tommorrow for dinner.`);
//  guest_list.unshift('Mubashir', 'Sarim' ,'Nasir');
// for(let i=0;i<guest_list.length;i++){
//     console.log(`Respected Sir/Madam \t` + guest_list[i] + `\n  we invited you on Dinner tommorrow.\n Thankyou... \n`)
// }
// console.log('\n Unfortunately, we cannot arrange a big table for dinner , only two people are allow allow');
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam ${remove_guest}  you are not invited for dinner`);
// }
// for(let i=0;i<guest_list.length;i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ' Yes you are invited for tommorrow dinner. \n thankyou...')
// }
// guest_list.splice(0,2);
// console.log(guest_list);


// Q18...
// let places:string[]=['Las vegas , Moscow , Cancon , Turkey , Islamabad , Sydney '];
// console.log('original:' + places);
// console.log( 'copy :' + [...places].sort());
// console.log('original:' + places);
// console.log('copy :' +[...places].sort().reverse());
// console.log('original:' + places.sort());


// // Q19...
// import{ guest_list } from'../14.Guest list/Ex14';
// console.log('n/ Printing number of guest invited on then dinner.');
// console.log(`we had finally invited ${guest_list.length}from Ex14`);


// Q20...
// let languages :string[]=['spanish' , 'english ', 'urdu ', 'punjabi ','sindhi'];
// console.log('list of languages:');
// for(let top of languages){
//     console.log(top)
// }


// Q21...
// interface item{
//     name :string
//     price:number
// };
// // create two books 
// const book : item={
//     name:'ESSENTIAL TYPESCRIPT',
//     price:500,
// };
// const book2: item={
//     name:' ELEMENTS',
//     price: 350,
// };
// console.log(`book name:${book.name},price1 $${book.price}`);
// console.log(`${book2.name}, price2 $${book2.price}`);


// Q22...
// let array : (string | number) [] =['Taha ', 'Babar' , 'Adeel ', 'Ali ', 'Sultan '];
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[2]);
// console.log(array[0]);
// console.log(array[1]);


// Q23...
// let car:string = 'subaru';
// test no.1 : Equality comparision (True) 
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')//True
// test no.2 : Strict equality comparision (True) 
// console.log("Is car === 'subaru'? I predict True.")
// console.log(car === 'subaru')//True
// test no.3 : Inequality comparision (False) 
// console.log("Is car != 'subaru'? I predict False.")
// console.log(car != 'subaru')//False
// test no.4 : Strict inequality comparision (False) 
// console.log("Is car !== 'subaru'? I predict False.")
// console.log(car !== 'subaru')//False
// test no.5 : Less than comparision (False) 
// console.log("Is car < 'subaru'? I predict False.")
// console.log(car < 'subaru')//False
// test no.6 : Greater than comparision (False) 
// console.log("Is car > 'subaru'? I predict False.")
// console.log(car > 'subaru')// False
// test no.7 : less than or equal comparision (True) 
// console.log("Is car <= 'subaru'? I predict True.")
// console.log(car <= 'subaru')//True
// test no.8 : Greater than or equal comparision (True) 
// console.log("Is car >= 'subaru'? I predict True.")
// console.log(car >= 'subaru')//True
// test no.8 : Checking Truthiness (True) 
// console.log("Is car ?  I predict True.")
// console.log(car)//True


// Q24...
// let car : string= "subaru";
// let age: number=18;
// let numbers : number []= [1,2,3,4];
// String Test
// // Test no.1: Equality (True)
// console.log("is car == subaru? I Pridict True.");
// console.log(car=='subaru');//True
// Test no.2: Strict equality (False)
// console.log("is car === subaru? I Pridict False.");
// console.log(car==='subaru');//False
// Test no.3: Inequality (True)
// console.log("is car != Honda? I Pridict True.");
// console.log(car!='Honda');//True
// Test no.4: Inequality (False)
// console.log("is car !== subaru? I Pridict False.");
// console.log(car!=='subaru');//False
//Lower case Functions
// Test no.5: Lower case conversion (True)
// console.log("is car.toLowercase()== subaru? I Pridict True.");
// console.log(car.toLowerCase()=='subaru');//True
// Test no.6: Lower case conversion (False)
// console.log("is car===car.toLowerCase() ? I Pridict False.");
// console.log(car===car.toLowerCase());//False
// Numerical Test functions
// Test no.7: Equality  (True)
// console.log("is age== 18? I Pridict True.");
// console.log(age ==18);//True
// Test no.8: Inequality (False)
// console.log("is age != 30? I Pridict True.");
// console.log(age != 30);//True
// Test no.9: Greater than  (False)
// console.log("is age > 19? I Pridict False.");
// console.log(age > 19);//False
// Test no.10: Less than or Equal  (True)
// console.log("is age<= 18? I Pridict True.");
// console.log(age <= 18);//True
// Logical Operators
// Test no.11:  And (True)
// console.log("is age > 15 && age < 25? I Pridict True.");
// console.log(age > 15 && age < 25);//True
// Test no.12: Or (False)
// console.log("is age < 15 || age > 25? I Pridict Flase.");
// console.log(age < 15 || age > 25);//False
// Array Test
// Test no.13:  In array (True)
// console.log("is 3 in numbers? I Pridict True.");
// console.log(3 in numbers);//True
// Test no.14:  Not in array (False)
// console.log("is 5 not in numbers? I Pridict True.");
// console.log(5 in numbers);//False


// Q25...
// let alien_color: string='green';
// if(alien_color=='green'){
//     console.log('the player just earned 5 points')
// }
// alien_color='red';
// if(alien_color=='yellow'){
//     console.log('the player just earned 5 points.')
// }


// Q27...
// let alien_color: string='green';
// if(alien_color=='green'){
//     console.log('the player earned 5 points')
// }
// else if(alien_color=='red'){
//     console.log('the player just earned 10 points')
// }
// else if(alien_color=='yellow'){
//     console.log('the player just earned 15 points')
// }
// else{
//     console.log('Please select right color')
// }
// Version 2...
// alien_color='red';
// if(alien_color=='green'){
//     console.log('the player earned 5 points')
// }
// else if(alien_color=='red'){
//     console.log('the player just earned 10 points')
// }

// else if(alien_color=='yellow'){
//     console.log('the player just earned 15 points')
// }
// else{
//     console.log('Please select right color')
// }
// Version 3...
// alien_color='yellow';
// if(alien_color=='green'){
//     console.log('the player earned 5 points')
// }
// else if(alien_color=='red'){
//     console.log('the player just earned 10 points')
// }
// else if(alien_color=='yellow'){
//     console.log('the player just earned 15 points')
// }
// else{
//     console.log('Please select right color')
// }


// Q28...
// If the person is less than 2 years old, print a message that the person is a baby.
// let age: number=19;
// if(age < 2){
//     console.log("the person is a baby.")
// }
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// else if(age >=2 && age < 4){
//     console.log("person is a toodler.")
// }
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if(age >=4 && age < 13){
//     console.log("The person is a kid.")
// }
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if(age >=13 && age < 20){
//     console.log("The person is a teenager.")
// }
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if(age >=20 && age < 65){
//     console.log("the person is a adult.")
// }
// // • If the person is age 65 or older, print a message that the person is an elder.
// else if(age > 65){
//     console.log("person is a elder.")
// }


// Q29...
// // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// // if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.
// let favorite_fruits:string[]=['Grapes', 'Mango','Banana'];
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// // If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// if(favorite_fruits.includes('Mango')){
//     console.log('I really like Mango.')
// }
// if(favorite_fruits.includes('Grapes')){
//     console.log('I really like Grapes.')
// }
// if(favorite_fruits.includes('Cherries')){
//     console.log('I really like Cherries.')
// }
// if(favorite_fruits.includes('Apple')){
//     console.log('I really like Apple.')
// }
// if(favorite_fruits.includes('Blueberry')){
//     console.log('I really like Blueberry.')
// }


// Q30...
// let users : string [] = ['Taha', 'Adeel' , 'Faraz', 'Aqil' , 'Meeran'];
// for(let user of users){
//     if(user ==='admin'){
//         console.log('Hello admin, would you like to see a status report?')
//     }
// else{
//     console.log(`Hello ${user}, thank you for logging in again.`)
//     }
// }


// Q31...
// let users : string [] = ['Taha', 'Ali', 'Sufiyan','Mubashir'];
// if(users.length === 0){
//     console.log("We need to find some users.")
// }
// else{
//     users=[];
//     console.log("All users have been removed " + users.length)
// }


// Q32...
// let current_users:string[]= ['Taha', 'Ali', 'Sufiyan','Mubashir','Waqie'];
// let new_users:string[]=['Taha', 'Ali', 'Danial','Farhan','Moin'];
// new_users.forEach(new_users=>{
//     if(current_users.some(current_users=>current_users.toLowerCase()===new_users.toLowerCase()))
//     {
//     console.log(`${new_users} Will need to enter a new user name.`)}
//  else{
//     console.log(`${new_users} is availabe`)
//  }})  


// Q33...
// let numbers : number[]=[1,2,3,4,5,,6,7,8,9];
// numbers.forEach(numbers=>{
//     let suffix='th';
//     if(numbers===1){
//         suffix='st'
//     }else if(numbers===2){
//         suffix='nd'
//     }else if(numbers===3){
//         suffix='rd'
//     }else if(numbers===4){
//         suffix='th'
//     }else if(numbers===5){
//         suffix='th'
//     }else if(numbers===6){
//         suffix='th'
//     }else if(numbers===7){
//         suffix='th'
//     }else if(numbers===8){
//         suffix='th'
//     }else if(numbers===9){
//         suffix='th'
//     }console.log(`${numbers}${suffix}`)
// })


// Q34...
// let pizzas:string[]=['New York-style Pizza','Detroit-style Pizza','California-style Pizza'];
// let item = "New York-style Pizza','Detroit-style Pizza','California-style Pizza";
// pizzas.forEach(item=>{

//     console.log(`I Like ${item}`)
// });
// console.log('I  Really Like Pizzas')


// Q35...
// let animals:string[]=['Dog','Cat', 'Parrot'];
// animals.forEach(animal => {
//     console.log(`A ${animal} would make a great pet.`)
// })
// console.log("Any of these animals would make a great pet!");


// Q36...
// function make_shirt(size:string , message:string){
//     console.log(`Making a ${size} of T.shirt with a ${message} printed on it.`)
// }
// make_shirt('medium' , 'code is love')


// Q37...
// function make_shirt(size:string="large",message:string="I love typescript"){
//     console.log(`Make a ${size} shirt with a ${message} printed on it.`)
// }
// make_shirt();
// make_shirt("medium" , "apna time ayega");
// make_shirt("small","Love Is Life");


// Q38...
// function describe_city(city:string,country:string="Pakistan"){
//     console.log(`${city} is in ${country}.`)
// }
// describe_city("Karachi");
// describe_city("Moscow", "Russia");
// describe_city("Dubai", "UAE");


// Q39...
// function city_country(city:string,country:string){
//     return`${city} , ${country}`
// }
// console.log(city_country("Karachi","Pakistan"))
// console.log(city_country("Moscow","Russia"))
// console.log(city_country("New York","United State"))


// Q40...
// function make_album(artist:string,tittle:string,tracks?:number){
//     let album={artist,tittle};
//     if(tracks) {
//         album ["tracks"] = tracks;
//     }return album;
// }
// console.log(make_album("Michael Jackson","The First Album"))
// console.log(make_album("Arijit Singh","The SecondAlbum"))
// console.log(make_album( "Atif Aslam","The Third Album", 15))


// Q41...
// let magicians : string[] = ["David","Derren Brown","Lance Burton"];
// function makegreat(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }
// make_great(magicians); 
// show_magicians(magicians); 


// Q42...
// let magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo"];
// function make_great(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] =   magicians[i] + " The Great ";
//   }
// }
// function show_magicians(magicians: string[]): void {
//   magicians.forEach((magician) => console.log(magician));
// }
// make_great(magicians);
// show_magicians(magicians);


// Q43...
// let magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo"];
// // Function to add "the Great" to each magician's name (works on a copy)
// function make_great(magicians: string[]): string[] {
//   // Create a copy of the original array using the spread operator
//   const greatMagicians: string[] = [...magicians];
//   for (let i = 0; i < greatMagicians.length; i++) {
//     greatMagicians[i] = "The Great " + greatMagicians[i];
//   }
//   // Return the modified array containing "The Great" titles
//   return greatMagicians;
// }
// // Function to display the list of magicians
// function show_magicians(magicians: string[]): void {
//   magicians.forEach((magician) => console.log(magician));
// }
// // Create a copy of the original array for modification
// const greatMagicians = make_great(magicians);
// // Show the original magicians (unchanged)
// console.log("Original Magicians:");
// show_magicians(magicians);
// // Show the magicians with "The Great" titles (modified copy)
// console.log("\nMagicians with The Great Titles:");
// show_magicians(greatMagicians);


// Q44...
// function buildSandwich(...ingredients: string[]): void {
//     if (ingredients.length === 0) {
//       console.log("You haven't chosen any ingredients for your sandwich!");
//       return;
//     }
//     let sandwichSummary = "Your sandwich:";
//     for (const ingredient of ingredients) {
//       sandwichSummary += `\n - ${ingredient}`;
//     }
//     console.log(sandwichSummary);
//   } 
//   buildSandwich("Ham", "Cheese", "Lettuce");
//   buildSandwich("Tomato", "Mozzarella");
//   buildSandwich(); 


// Q45...
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
































