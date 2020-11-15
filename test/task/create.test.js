const db = require('../DbHandler');
const expect = require('chai').expect;
const taskService = require('../../server/Services/TaskService');

before(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
after(async () => await db.closeDatabase());

describe('task', () => {
  it('can be created', () => {
    expect(() => {
      taskService.create({
        title: 'test',
        description: 'description',
        unit: 'unit',
        priority: 'low'
      })
    })
      .to
      .not
      .throw();
  });
});