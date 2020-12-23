import mongoose from 'mongoose'
import config from './config'

(async()=>{
    try {
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.3qaoo.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Database is connected to:',db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()