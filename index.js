//create http server with the help of node js
const http = require('http')
const fs = require('fs');
const {Transform, pipeline} = require('stream')
const replaceWord = require('./replaceWord')
const upperCase = require('./upperCase')

const server = http.createServer((req,res)=>{
    if(req.url != '/'){
        return res.end();
    }
    // /*************/
    // //dowloading -big - file -bad-way
    // const file = fs.readFileSync('sample.txt')
    // return res.end(file)

    // /************ */
    // //downloading big file good way
    // const readStream = fs.createReadStream('sample.txt') 
    // //readstream --> writestream for pipe
    // readStream.pipe(res)

    // /**************************** */
    // //copy big file bad way
    // const file = fs.readFileSync('sample.txt')
    // fs.writeFileSync('output.txt',file)
    // res.end()

    // /*************************** */
    // //copy file good way
    // const readStream = fs.createReadStream('sample.txt');
    // const writeStream = fs.createWriteStream('output.txt');
    // readStream.on('data',(buffer)=>{
    //     console.log("buffer data>> ",buffer.toString())
    //     writeStream.write(buffer)
    // })

    //duplex stream
    const readable = fs.createReadStream('sample.txt');
    const wriable = fs.createWriteStream('output.txt');
   

    // readable
    // .pipe(replaceWord)
    // .pipe(upperCase)
    // .pipe(wriable)

    //handle error
    pipeline(readable,replaceWord,upperCase,wriable,(err)=>{
        if(err){
            console.log(err)
        }  
    })

    res.end()

})

const port = process.env.PORT || 3000;

server.listen(port,()=>{
    console.log(`listing to port ${port}`)
})