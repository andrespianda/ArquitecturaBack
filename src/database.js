const mongoose = require('mongoose');
/*const URI = 'mongodb://localhost/futboldb';*/
console.log(process.env.MONGODB_URI)
//const URI = process.env.MONGODB_URI; //ejecucio  dotenv*/

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI 
: 'mongodb://localhos/mtestdb';

mongoose.connect(URI, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('base de datos conectada');
});