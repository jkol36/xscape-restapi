import { expect } from 'chai';
import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';




describe('config', () => {
	it('should initialize firebase', async () => {
		const firebase = initializeApp({
	    credential: admin.credential.cert(require('../firebase.json')),
	    databaseURL: "https://xskape-8d987-default-rtdb.firebaseio.com"
	  })
	})
})