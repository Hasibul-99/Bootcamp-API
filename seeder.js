const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv')

// Load env vars
dotenv.config({
    path: './config/config.env'
});

// Load modals
const Bootcamp = require('./models/Bootcamp');

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const Bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

// Imort into DB
const importData = async () => {
    console.log("hello");

    try {
        await Bootcamp.create(Bootcamps);

        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err);

    }
}

// Delete Data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()

        console.log('Data delete'.red.inverse);
        process.exit();
    } catch (err) {
        console.log(err);

    }
}


// node seeder -i
if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}