const DB = require('../db');

test('Should return 2 rows', () => {
    DB.create({todo: 'Lorem ipsum dolor'});
    DB.create({todo: 'Lorem ipsum dolor it'});

    expect(DB.all().length).toBe(2);
});

test('Should create a new element', () => {
    DB.create({id: 1, todo: 'Lorem ipsum dolor it'});

    expect(DB.find(1)).toEqual({id: 1, todo: 'Lorem ipsum dolor it'}) 
});

test('Should delete a row', () => {
    DB.create({id: 2, todo: 'Hello, world!'});
   
    expect(DB.delete(2)).toEqual(true);
});

test('Should update the row with ID 2', () => {
    const payload = {todo: 'Hello, World!'};
    DB.update(1, payload);

    expect(DB.find(1)).toEqual({id: 1, ...payload});
});