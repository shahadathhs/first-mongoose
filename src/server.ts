import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose'
import { config } from './app/config/config'

const port: number = config.port as number
const DATABASE_URL: string = config.mongo.url

let server: Server

async function start() {
  // ** Connect to MongoDB **
  await mongoose.connect(DATABASE_URL).then(() => {
    console.log('MongoDB connected!')
  })

  // ** Start Server **
  server = app.listen(port, () => {
    console.log(`Mongoose server is running on port ${port}!`)
  })
}

// ** Call start function **
start()

process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})

process.on('SIGINT', () => {
  console.log('SIGINT is received')
  if (server) {
    server.close()
  }
})

process.on('exit', () => {
  console.log('exit is received')
  if (server) {
    server.close()
  }
})

process.on('uncaughtException', () => {
  console.log('uncaughtException is received')
  if (server) {
    server.close()
  }
})

process.on('unhandledRejection', () => {
  console.log('unhandledRejection is received')
  if (server) {
    server.close()
  }
})
