import { expect } from 'chai'
import server from '../server'
import request from 'supertest'
import mongoose from 'mongoose'
import agent from 'superagent-bluebird-promise'
import fs from 'fs'

describe.only('routes', () => {
  it('should send a notification to a device', async () => {
    const deviceToken = "cWXt0N3kFU9kp-JG6S9ib1:APA91bFJfXY1bY0bQxITzQT9Qnu5IFPDKFvlxonPC6R5sQUg-KuoVYbwPaAmyRlMHDY4iyPN-gTuovQIyB1xJ465MRp0mlDWgbWK7JUECmr-_aS29kmQmzqND-n2AebXXxxluyw-Ca4q";
    const messageData = {
      data: {
        title: 'Go Live Request',
        body: 'Jkol36 wants you to go live!',
      },
      token: deviceToken,
      apns: {
        payload: {
          aps: {
            contentAvailable: true,
          },
        },
        headers: {
          'apns-push-type': 'background',
          'apns-priority': '5',
          'apns-topic': '', // your app bundle identifier
        },
      },
      
    }
    agent
      .post('http://localhost:5001/notifications/sendToDevice')
      .send({deviceToken, messageData})
      .then(res => {
        console.log(res.body)
        expect(res).to.be.ok
      })



  })
})