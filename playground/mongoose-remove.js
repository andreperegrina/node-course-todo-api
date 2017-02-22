const {ObjectID}= require('mongodb');

const {mongoose} =require('../server/db/mongoose');
const {Todo} =require('../server/models/todo');
const {User} =require('../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:''}).then((result)=>{
//    console.log(result);
// });
//
// Todo.findByIdAndRemove('58ad3b9b45b252208f100833').then((todo) => {
//     console.log(todo);
// });