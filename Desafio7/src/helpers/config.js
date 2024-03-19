import dotenv from "dotenv"

dotenv.config()

export default {
    mongoURL: process.env.MONGO_URL,
    PORT: process.env.PORT
}