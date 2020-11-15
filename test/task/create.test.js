const db = require('../DbHandler');
const expect = require('chai').expect;
const taskService = require('../../server/Services/TaskService');

before(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
after(async () => await db.closeDatabase());

describe('Task Service', () => {

  it('can create a task', () => {
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

  it('requires values to create a task', () => {
    expect(() => {
      taskService.create()
    })
      .to
      .throw();
  });

  it('can retrieve a task', () => {
    taskService
      .create({
        title: 'test',
        description: 'description',
        unit: 'unit',
        priority: 'low'
      })
      .then(created => {
        taskService
          .find(created.id)
          .then(task => {
            expect(task)
              .to
              .have
              .property('id', created.id)
          });
      });
  });
});