// Define choices and their consequences
const choices = [
    {
        text: "Revisit the details of the nightmare",
        outcome: "Despite the difficulty in recalling every detail, Winona's mind flashes with fragmented memories: sterile white observation rooms, vials brimming with crimson fluid, and the reverberation of shouts and pounding footsteps along endless corridors. Though the significance eludes her, an unsettling feeling lingers."
    },
    {
        text: "Bury the thought and move on",
        outcome: "Outcome 2"
    },
    // Add more choices as needed
];

// Function to display the scene description, character dialogue, question, and choices
function displayChapter1() {
    console.log("Displaying chapter 1")
    // Replace placeholders with actual content
    document.getElementById('scene-description').textContent = "As dawn breaks, Winona jerks awake, her heart pounding with dread. Nightmares haunt her sleep, a cruel reminder of past sorrows. She hesitates, torn between the urge to remember the dream's details and the fear of reliving its horrors.";
    document.getElementById('question').textContent = "What should she do?";
    
    // Generate choice buttons dynamically
    const choicesContainer = document.getElementById('choices');
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice));
        choicesContainer.appendChild(button);
    });
}

// Function to handle player's choice
function handleChoice(choice) {
    // Clear the current content
    document.getElementById('scene-description').textContent = '';
    document.getElementById('question').textContent = '';
    document.getElementById('choices').textContent = '';

    // Display the chosen outcome and its consequences
    const outcomeText = document.createElement('p');
    outcomeText.textContent = `You chose to ${choice.text}`;
    const consequencesText = document.createElement('p');
    // Assuming the outcome has consequences text associated with it
    consequencesText.textContent = `Consequences: ${choice.outcome}`;

    document.getElementById('scene-description').appendChild(outcomeText);
    document.getElementById('scene-description').appendChild(consequencesText);

    // Add buttons for reviewing Choice History and continuing the story
    const choicesContainer = document.getElementById('choices');
    const reviewButton = document.createElement('button');
    reviewButton.textContent = 'Review Choice History';
    reviewButton.addEventListener('click', () => reviewChoiceHistory());

    const continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.addEventListener('click', () => continueStory());

    choicesContainer.appendChild(reviewButton);
    choicesContainer.appendChild(continueButton);
}

// Function to get consequences for a chosen outcome (replace with your logic)
function getConsequences(outcome) {
    // Add your logic here to retrieve consequences for the chosen outcome
    // Example: switch (outcome) { case 'Outcome 1': return 'Consequences for Outcome 1'; ... }
}

// Function to handle reviewing Choice History
function reviewChoiceHistory() {
    const choiceHistoryModal = document.getElementById('choice-history-modal');
    const closeButton = choiceHistoryModal.querySelector('.close');
    const closeModalButton = document.getElementById('close-modal-btn');
    const choiceHistoryContent = document.getElementById('choice-history');
  
    // Logic to populate choice history content
    const choiceHistory = ["Choice 1: Revisit the details of the nightmare"]; // Replace with your actual choice history
    choiceHistoryContent.innerHTML = ''; // Clear previous content
  
    choiceHistory.forEach(choice => {
      const p = document.createElement('p');
      p.textContent = choice;
      choiceHistoryContent.appendChild(p);
    });
  
    // Hide other content
    document.getElementById('scene-description').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('choices').style.display = 'none';
  
    // Display the modal overlay
    choiceHistoryModal.style.display = 'block';
  
    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      // Show other content
      document.getElementById('scene-description').style.display = 'block';
      document.getElementById('question').style.display = 'block';
      document.getElementById('choices').style.display = 'block';
  
      choiceHistoryModal.style.display = 'none';
    });
  
    // Close the modal when the "Back" button is clicked
    closeModalButton.addEventListener('click', () => {
      // Show other content
      document.getElementById('scene-description').style.display = 'block';
      document.getElementById('question').style.display = 'block';
      document.getElementById('choices').style.display = 'block';
  
      choiceHistoryModal.style.display = 'none';
    });
  
    // Close the modal if the user clicks outside of it
    window.addEventListener('click', event => {
      if (event.target == choiceHistoryModal) {
        // Show other content
        document.getElementById('scene-description').style.display = 'block';
        document.getElementById('question').style.display = 'block';
        document.getElementById('choices').style.display = 'block';
  
        choiceHistoryModal.style.display = 'none';
      }
    });
  }
    
// Function to handle continuing the story
function continueStory() {
    // Implement logic to continue the story
    console.log('Continuing the story...');
}

// Call displayChapter1 function to start the chapter
displayChapter1();
