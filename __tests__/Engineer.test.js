const Engineer = require('../lib/Engineer');
//const Employee = require('../lib/Employee');

test('check if has github user', () => {
    const testValue = 'githubUser'
    const engineer = new Engineer(1, 'foo', 'test@test.com', testValue)
    expect(engineer.github).toBe(testValue)
  });

  test('creates role', () => {
    const testValue = 'githubUser'
    const engineer = new Engineer(1, 'foo', 'test@test.com', 'githubUser');
    expect(engineer.getGithub()).toBe(testValue)
  });

  test('check if has github role', () => {
    const testValue = 'Engineer'
    const engineer = new Engineer(1, 'foo', 'test@test.com', testValue)
    expect(engineer.getRole()).toBe(testValue)
  });