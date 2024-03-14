const {Transform} = require('stream')

const upperCase = new Transform({
    transform(chunk,encoding,callback){
        callback(null, chunk.toString().toUpperCase())
    }
})

module.exports = upperCase;