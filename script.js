const userName = prompt("Please enter your name")
const userAge = prompt(" Please enter your age ");

console.log(`Name:${userName}`);
console.log(`Age:${userAge}`);
if (userAge>= 25 && userAge <=45) {
    console.log(`User is a working professional`);
}       














// temporal dead zone mein let and const k variable rehte hain jab tak ki vo initialize na kiye jaye
// strings indexed hoti hain matlab usme zero index se numbering hoti hai ,
// aur hum string k kisi character ko aise  access kar sakte hain "my name is arun [0]" ...is se jo zeroth index pe hoga vo print ho jayega
// aur jese jo character available nhi hoga vo undefined value dega
// ***STRING LENGTH  string ki length ko check kr skte hain ki usme kitne characters hain like message.length
// ***CONVERT STRING TO UPPERCASE ya lowercase    agar humein kisi string ko uppercase ya lowercase mein convert krna ho to
// hum string.toupperspace()   ya   string.tolower space () ka use krte hain.