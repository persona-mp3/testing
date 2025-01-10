const axios = require('axios');
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1'

//test get request
test('User with ID 1 exists', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(res.status).toBe(200);
});

//test response content
test('User with ID 1 has name "Leanne Graham"', async () => {
    const res = await axios.get(apiUrl);
    expect(res.data.name).toBe('Leanne Graham');
});

//test post request
test('Create new user', async () => {
    const user = {
        name: 'Test User',
        username: 'testuser',
        email: 'testuser03@example.com'
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    expect(res.status).toBe(201);
    
});

//functional testing to ensire api works as expected
test('Create new post (functional test)', async () => {
    const post = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    expect(res.status).toBe(201);
    expect(res.data.title).toBe('foo');
    expect(res.data.body).toBe('bar');
    expect(res.data.userId).toBe(1);
})