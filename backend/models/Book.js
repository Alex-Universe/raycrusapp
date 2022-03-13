const {Schema,model} = require('mongoose');

const book_schema = new Schema({
    tittle:{type:String, required:true},
    author:{type:String,required:true},
    isbn:{type:String, required:true}, 
    image_path:{type:String},
    created_at:{type:Date,default:Date.now}
})

module.exports = model('Book',book_schema);