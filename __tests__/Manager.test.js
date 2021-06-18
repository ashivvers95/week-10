const Manager = require('../lib/Manager');
//const Employee = require('../lib/Employee');

test('check if has office Number', () => {
  const testValue = 1234
  const manager = new Manager(1, 'foo', 'test@test.com', testValue)
  expect(manager.officeNumber).toBe(testValue)
});

test('creates role', () => {
  const testValue = 1234
  const manager = new Manager(1, 'foo', 'test@test.com', testValue);
  expect(manager.getOfficeNumber()).toBe(testValue)
});

test('check if has github role', () => {
  const testValue = 'Manager'
  const manager = new Manager(1, 'foo', 'test@test.com', 1234)
  expect(manager.getRole()).toBe(testValue)
});