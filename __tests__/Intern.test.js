const Intern = require('../lib/Intern');
//const Employee = require('../lib/Employee');

test('check if has school', () => {
  const testValue = 'UofA'
  const intern = new Intern(1, 'foo', 'test@test.com', testValue)
  expect(intern.school).toBe(testValue)
});

test('creates role', () => {
  const testValue = 'UofA'
  const intern = new Intern(1, 'foo', 'test@test.com', testValue);
  expect(intern.getSchool()).toBe(testValue)
});

test('check if has github role', () => {
  const testValue = 'Intern'
  const intern = new Intern(1, 'foo', 'test@test.com', 'UofA')
  expect(intern.getRole()).toBe(testValue)
});