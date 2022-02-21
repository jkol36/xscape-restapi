import admin from 'firebase-admin';
import { Router } from 'express'

const router = Router()

router.route('/sendToDevice')
  .post((req) => {
  	const { messageData, deviceToken } = req.body
  	admin.messaging().send({
	    token: deviceToken,
	    data: messageData
	  }).then(console.log)

  })


export default router