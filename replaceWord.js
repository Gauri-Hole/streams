const {Transform} = require('stream')

const replaceWord = new Transform({
    transform(chunk,encoding,callback){
        // replaceWord.emit('error',new Error('wrong...'))
        const finalStr = chunk.toString().replaceAll(/ipsum/gi,'text');
        callback(null, finalStr)
    }
})

module.exports = replaceWord;