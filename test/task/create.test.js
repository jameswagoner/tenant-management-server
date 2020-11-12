const db = require('../DbHandler');
const taskService = require('../../server/Services/TaskService');

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe('task ', () => {
  it('can be created', () => {
    expect(() => {
      // todo: setup mock http request
    })
      .not
      .toThrow();
  });
});