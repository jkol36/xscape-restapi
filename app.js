import server from './server'
import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';



initializeApp({
  credential: admin.credential.cert(require('./firebase.json')),
  databaseURL: "https://xskape-8d987-default-rtdb.firebaseio.com"
})
server.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))





