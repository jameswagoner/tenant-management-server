const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server/app');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Task Resource', () => {

  it('lets an authorized user retreive a list of tasks', (done) => {
    chai
      .request(app)
      .get('/tasks')
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  })

  it('prevents a non authorized user from retreiving list of tasks', () => {
    expect(false).to.be.true;
  });

  it('lets an authorized user retreive a task', () => {
    expect(false).to.be.true;
  })

  it('prevents a non authorized user from retreiving a task', () => {
    expect(false).to.be.true;
  });

  it('lets an authorized user create a task', () => {
    expect(false).to.be.true;
  });

  it('prevents a non authorized user from creating a task', () => {
    expect(false).to.be.true;
  });

  it('requires [title, descripion, and unit] to create a task', () => {
    expect(false).to.be.true;
  });

  it('can update a task', () => {
    expect(false).to.be.true;
  });

  it('can add a note to a task', () => {
    expect(false).to.be.true;
  });

  it('can mark a task as completed', () => {
    expect(false).to.be.true;
  });
})