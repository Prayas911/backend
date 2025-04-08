import fs from "fs";

// crwate file sync
const syncwriter = ()=>fs.writeFileSync("./data.csv","This Is is sync file");

const syncreader =()=>{
    const fileData = fs.readFileSync("./data.csv","utf-8");
console.log(fileData);
    
}

// utf-8 ===> for reading a file



// append file
const syncappender = ()=>fs.appendFileSync("./data.csv","\nThis is a line 3");


// delete sync

// fs.unlinkSync("./data.csv");
export default {syncappender,syncreader,syncwriter};

syncwriter();
syncreader();
syncappender();
