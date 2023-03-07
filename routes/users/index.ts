'use strict'

import { MongoClient } from 'mongodb'

export default eventHandler(async event => {
  const mongoClient = await new MongoClient('mongodb://localhost:27017').connect()
  const collection = mongoClient.db('advanced-nuxtjs-course').collection('users')
  const docs = await collection.find().toArray()
  client.close()
  return docs
})
