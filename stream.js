
const {Readable, Writable} =require('stream')

//readable stream
const readable = new Readable({
    highWaterMark:12,     //internal buffer/ memory/ its threshould
    objectMode: true,
    read(){}
});

readable.on('data',(chunk)=>{
    console.log('chunk:',chunk)
})
// console.log(readable.push('hello'))
console.log(readable.push({name:'gauri'}))


//wriable stream
const writable = new Writable({
    write(s){
        console.log(s.toString())
    }
})

writable.write('hello')
