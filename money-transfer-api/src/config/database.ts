import mongoose from 'mongoose';


export const connection = async () => {
    try {
        const db = mongoose.connect(`mongodb+srv://martinfresh8:qwertyuiop!23@cluster0.fze7kqn.mongodb.net/`)
        console.log(`Mongodb connected`)
    } catch (err) {
        console.log(err)
    }
}