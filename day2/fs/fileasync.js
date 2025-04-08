import { log } from "console";
import fs from "fs/promises";

const asyncwriter = async()=>{
    try{
        await fs.writeFile("./dataasync.csv","This is a async file.");
        console.log("file ha sbeen written successfully.(async)");
    }catch (error){
        console.log("unable to write file.(async)",error);
    }
    
}
const asyncreader = async()=>{
   const fileData = await fs.readFile("./dataasync.csv","utf-8");
//    console.log(fileData);
return fileData;
// catch(error){
//     console.log()

// }
}
asyncwriter();
const data= await asyncreader();
console.log(data)