const chai = require('chai')
const chaiHttp = require('chai-http')
const faker = require('faker')
const server = require('../app')
const should = chai.should()

chai.use(chaiHttp)

describe('init', function(){
    it('check app status', function(done){
        chai.request(server).get('/').end((err,res)=>{
            should.not.exist(err)
            res.should.have.status(200)
            done()
        })
    })
})

describe('Get API test',function(){
    it('Check the api without user id parameter',function(done){
        chai.request(server).get('/post-list').end((err,res)=>{
            should.not.exist(err)
            res.should.have.status(401)
            res.body.should.be.a('object')
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('User Id parameter is missing')
            done()
        })
    })
    it('Check the api without user id parameter',function(done){
        chai.request(server).get('/post-list?user_id=1').end((err,res)=>{
            should.not.exist(err)
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('userId')
            res.body.should.have.property('title')
            res.body.should.have.property('body')
            done()
        })
    })
})

describe('Post API test',function(){
    chai.request(server).post('/submit-data').send({}).end((err,res))
})