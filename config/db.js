const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb+srv://Amar:543210shahadin@cluster0.gixjk.mongodb.net/AmarBatch?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))

db.once('open', ()=>{
    console.log("Database Connected");
    console.log("Hello Shahadin")
    
})






