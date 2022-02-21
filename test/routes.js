import { expect } from 'chai'
import server from '../server'
import request from 'supertest'
import mongoose from 'mongoose'
import agent from 'superagent-bluebird-promise'
import fs from 'fs'

describe('routes', () => {
  it('should send a notification to a device', async () => {
    const deviceToken = "f7Dj1-ByvEe3vRBb8Q5ONN:APA91bGi2eVlvTl724WQGiD1VO9Ahk3jDJFgGltOG8O7O860utPcilykfZRM6tHimZmrt1Vm3nq-t-bhiRIJ5lct9mjdQNXnUBVWTrNVrcV2AOHj52Ri8YYS7b4jlPozqg1i9mhFPXiV";
    const messageData = {
      title: 'Go Live Request',
      body: 'Jkol36 wants you to go live!'
    }
    agent
      .post('http://localhost:5001/notifications/sendToDevice')
      .send({deviceToken, messageData})
      .then(res => {
        expect(res).to.be.ok
      })



  })
})