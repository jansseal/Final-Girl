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

function loginUser(username, password) {
    return fetch(`/api/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            return response.json();
        })
        .then(userData => {
            console.log('User logged in successfully:', userData);
            return userData;
        })
        .catch(error => {
            console.error('Error logging in:', error);
            throw error;
        });
}

function getCurrentPrompt(username) {
    return fetch(`/api/current-prompt/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch current prompt');
            }
            return response.json();
        })
        .then(data => {
            console.log('Current prompt retrieved successfully:', data);
            return { currentChapter: data.currentChapter, currentPrompt: data.currentPrompt };
        })
        .catch(error => {
            console.error('Error fetching current prompt:', error);
            throw error;
        });
}

function updateCurrentPrompt(username, currentPrompt) {
    return fetch(`/api/update-current-prompt/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPrompt }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update current prompt');
        }
        return response.json();
    })
    .then(data => {
        console.log('Current prompt updated successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error updating current prompt:', error);
        throw error;
    });
}

function updateChapter(username) {
    return fetch(`/api/update-chapter/${username}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update user chapter');
        }
        return response.json();
    })
    .then(data => {
        console.log('User chapter updated successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error updating user chapter:', error);
        throw error;
    });
}


module.exports = { createUser, loginUser, getCurrentPrompt, updateCurrentPrompt, updateChapter };
