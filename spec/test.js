const chai = require('chai');
const controller = require('../server/controller.js')
const expect  = require('chai').expect;
const request = require('request');
const axios = require('axios');

describe('Node Tests', () => {
  describe('Controller functions', (done) => {

    it('getWeather should be a function', () => {
      expect(typeof controller.getWeather).to.equal('function');
    })

    it('getTravelTime should be a  function', () => {
      expect(typeof controller.getTravelTime).to.equal('function');
    })
  })
})
