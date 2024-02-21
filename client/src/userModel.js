function createUser(username, password) {

    return fetch('/api/create-user', {
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

