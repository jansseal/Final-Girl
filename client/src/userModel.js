// this function should be used to call api endpoint, which in turn saves to the db

function createUser(username, password) {
    // Send a POST request with username and password data to the API endpoint
    return fetch('http://localhost:3001/api/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();
    })
    .then(data => {
        console.log('User created successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error creating user:', error);
        throw error;
    });
}

module.exports = { createUser };

