import dotenv from "dotenv"

// ** Load Environment Variables **
dotenv.config({ path: ".env" })

export const config = {
  port: process.env.PORT ?? 5000,
  mongo: {
    url: process.env.MONGO_URL ?? "mongodb://localhost:27017/test"
  }
}