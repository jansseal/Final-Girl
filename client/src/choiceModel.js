function createChoiceHistory(username) {
    return fetch('http://localhost:3030/microservice/create/' + username, {
        method: 'POST',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create choice history table');
        }
        return response.json();
    })
    .then(data => {
        console.log('Choice history table created successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error creating choice history table:', error);
        throw error;
    });
}

function updateChoiceHistory(username, choice_id, prompt, choice_text) {
    // console.log(username + choice_id + prompt + choice_text);
    return fetch('http://localhost:3030/microservice/update/' + username, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "choice_id": choice_id, "prompt": prompt, "choice_text": choice_text }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update choice history');
        }
        return response.json();
    })
    .then(data => {
        console.log('Choice history updated successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error updating choice history:', error);
        throw error;
    });
}

function getChoiceHistory(username) {
    return fetch('http://localhost:3030/microservice/get/' + username, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to return choice history');
        }
        return response.json();
    })
    .then(data => {
        console.log('Choice history:', data);
        return data;
    })
    .catch(error => {
        console.error('Error getting choice history:', error);
        throw error;
    });
}

module.exports = { createChoiceHistory, updateChoiceHistory, getChoiceHistory };
