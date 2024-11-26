import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

const port_add = process.env.PORT

dotenv.config({
    path: `./env`
})

connectDB()
.then(() => {
    app.listen( port_add || 8000, () => {
        console.log(`Server is running ${port_add}`)
    })
})
.catch((err) => {
    console.error("MONGODB connection Failed",err);
})









/*
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.error("Error occurred", error);
            throw error
        })

        app.listen( process.env.PORT ,() => {
            console.log(`app is listening on the port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("error", error)
        throw error
    }
})()
    */