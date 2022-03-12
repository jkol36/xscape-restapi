import admin from 'firebase-admin';
import { Router } from 'express'

const router = Router()

router.route('/sendToDevice')
  .post((req, res) => {
  	const { messageData } = req.body
		console.log('sending', messageData)
		//triggers push notification to the targeted devices.
		return admin.messaging().send(messageData).then(console.log)
	})


export default router