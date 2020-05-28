const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'

const dbName = 'statistics'

const client = new MongoClient(url, { useUnifiedTopology: true })

const getDatabase = (callback) => {
  client.connect(function (err) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    callback(db, client)
  })
}

const findDocuments = function (db, callback) {
  const collection = db.collection('users')
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null)
    callback(docs)
  })
}

exports.getDatabase = getDatabase
exports.findDocuments = findDocuments
