const Employee = require('../lib/Employee');

test('creates an object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});

test('set id', ()=> {
    const employeeId = 0;
    const employee = new Employee(employeeId);

    expect(typeof(employee.id)).toBe("number");
});

test('set name', ()=> {
    const employeeName = 'string';
    const employee = new Employee(0, employeeName);

    expect(employee.name).toBe(employeeName);
});

test('set email', ()=> {
    const employeeEmail = 'string';
    const employee = new Employee(0, 'string', employeeEmail);

    expect(employee.email).toBe(employeeEmail);
});

