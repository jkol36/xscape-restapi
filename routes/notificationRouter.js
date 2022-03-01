import admin from 'firebase-admin';
import { Router } from 'express'

const router = Router()

router.route('/sendToDevice')
  .post((req) => {
		console.log('got request', req)
  	const { messageData, deviceToken } = req.body
		console.log('message data', messageData)
		console.log('device token', deviceToken)
  	admin.messaging().send({
	    token: deviceToken,
	    data: messageData
	  }).then(console.log)

  })


export default router