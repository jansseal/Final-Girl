import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { updateChoiceHistory } from './choiceModel';
import { updateCurrentPrompt, updateChapter } from './userModel';
import prompts01image from './prompts0image.jpeg';
import prompts02image from './prompts2image.jpeg';
import prompts03image from './prompts5image.jpg';
import prompts04image from './prompts6image.jpg';

const prompts = [
    {
        prompt: "As Winona settles in for the evening next to the fireplace, ready to delve into the book she brought, she hears a knock at the front door. That's strange... she's not expecting anyone.",
        choices: [
            { id: 1, text: "Ignore it" },
            { id: 2, text: "See who's at the door" }
        ]
    },
    {
        prompt: "Winona remains still and quiet, hoping whoever it is will just go away. However, just as she brings her attention back to her book, the knocking continues—this time, loudly and incessantly.",
        choices: [
            { id: 1, text: "Ignore it again" },
            { id: 2, text: "See who's at the door" }
        ]
    },
    {
        prompt: "The knocking suddenly stops, followed by a heavy silence. In her state of unease, Winona remembers that she left the back door unlocked earlier. Given tonight's unexpected visitor, she errs on the side of caution and goes to lock it. But when she reaches the back door, she discovers it's already locked. Did she just forget she locked it on her way back in?",
        choices: [
            { id: 1, text: "Dismiss it" },
            { id: 2, text: "Trust her gut" }
        ]
    },
    {
        prompt: "Winona manages to convince herself that she forgot about locking the door, trying not to let paranoia ruin her weekend away. Determined to have the relaxing evening she originally envisioned, she returns to her spot by the fireplace to finally start reading her book. However, once she returns, she notices her phone is gone from the coffee table where she KNOWS she left it. A chill runs down Winona's spine as she realizes she may not be alone in the house. Without a way to call the police, she needs to find a way to defend herself.",
        choices: [
            { id: 1, text: "Get a butcher knife from the kitchen" },
            { id: 2, text: "Get the stoker from the fireplace" }
        ]
    },
    {
        prompt: "A chill runs down Winona's spine as she realizes she may not be alone in the house. Without a way to call the police, she needs to find a way to defend herself.",
        choices: [
            { id: 1, text: "Get a butcher knife from the kitchen" },
            { id: 2, text: "Get the stoker from the fireplace" }
        ]
    },
    {
        prompt: "With a weapon in hand, Winona cautiously begins to search the house. After clearing the front of the house, she makes her way down the hallway and into the first bedroom where she threw her belongings earlier. Nothing is amiss, making her start to question whether she may have gotten scared for no reason. But once she exits the bedroom to finish up her search, she stops dead in her tracks. At the end of the hallway, staring back at her, is a large male figure wearing dark clothing and a ski mask. After being frozen for a second, she turns to run the opposite way, but is met by the sight of another male figure also donning dark clothing and a ski mask. Before Winona can fully process the situation she's been caught in, the two figures start walking in her direction, closing in on her in the hallway.",
        choices: [
            { id: 1, text: "Use the knife to stab one of the assailants" },
            { id: 2, text: "Swing the fire stoker at one of the assailants" }
        ]
    },
    {
        prompt: "Thinking it may be a neighbor or delivery person, Winona gets up and makes her way to the front door. Once she gets there, she notices that the door has a peephole.",
        choices: [
            { id: 1, text: "Look through the peephole" },
            { id: 2, text: "Open the door" }
        ]
    },
    {
        prompt: "When she looks out the peephole, Winona observes the silhouette of a large male figure, but is unable to make out his face or any other identifying features. Even though the porch light is flipped on, it doesn't appear to be working.",
        choices: [
            { id: 1, text: "Call the police" },
            { id: 2, text: "Ask the visitor to identify themselves" }
        ]
    },
    {
        prompt: "This unexpected visitor is making Winona a little uneasy, so she draws her attention away from the peephole and down to her phone to call the police. Being alone for the weekend, she doesn't want to take any chances. Unfortunately, she realizes that she has no service. The house has WiFi, but that doesn't help her now. A quick glance around tells her that the house doesn't have a landline either. Hating herself for choosing a weekend getaway in the woods, she looks back through the peephole to see if the man is still there - which he isn't. Winona doesn't know whether to feel relieved or paranoid. In her state of unease, she remembers that she left the back door unlocked earlier. Given her current situation, she errs on the side of caution and goes to lock it. But when she reaches the back door, she discovers it's already locked. Did she just forget she locked it on her way back in?",
        choices: [
            { id: 1, text: "Dismiss it" },
            { id: 2, text: "Trust her gut" }
        ]
    },
    {
        prompt: '"Who\'s there?" Winona says out loud. "Your neighbor!" the man on the other side of the door says back. "I noticed your car\'s trunk was open when I was driving by, so I wanted to make sure you knew. Might want to make sure no one\'s taken anything!"',
        choices: [
            { id: 1, text: "Call the police" },
            { id: 2, text: "Open the door" }
        ]
    },
    {
        prompt: 'As soon as Winona unlocks and begins to open the door, the door is pushed suddenly and forcefully from the other side, knocking her back and off her feet. The door hit her so hard, it takes her a second to get her bearings. Once she does, she looks up and sees not one, but two figures wearing ski masks and dark clothing looking back at her. The slightly larger one of the two calmly asks "Are you all alone tonight?"',
        choices: [
            { id: 1, text: "Be honest" },
            { id: 2, text: "Lie" }
        ]
    },
    {
        prompt: 'Afraid of setting off the men, Winona slowly nods her head yes in silence. "Good, good..." the larger one says, as she sees his eyes crinkle in delight. "I\'m so happy you chose to be honest - I think we\'ll get along just fine". Before Winona has time to form another thought, the smaller, quiet man shoots toward her with a rag in his hand.',
        choices: [
            { id: 1, text: "SCREAM!" }
        ]
    },
    {
        prompt: '"My boyfriend\'s meeting me here - he\'ll be here soon!" Winona spits out. "So you think we\'re stupid, huh?" the larger one says as she sees him ball his fists. ',
        choices: [
            { id: 1, text: "SCREAM!" }
        ]    },
    {
        prompt: "It's too late - the rag is already covering Winona's nose and mouth. Everything fades to black."
    }
];

const backgroundImages = [
    prompts01image,
    prompts01image,   
    prompts02image,
    prompts01image,
    prompts01image,   
    prompts03image,
    prompts04image,
   
]

function Chapter1({ username, currentPrompt: initialPrompt, onChapterCompletion }) {
    // // const { username } = useParams();
    const [currentPrompt, setCurrentPrompt] = useState(initialPrompt);
    const [chosenWeapon, setChosenWeapon] = useState(null);
    const promptData = prompts[currentPrompt];

    const handleChoice = (choiceId) => {
        const choiceText = promptData.choices.find(choice => choice.id === choiceId).text;
        updateChoiceHistory(username, choiceId, promptData.prompt, choiceText)
            .then(() => {
                let nextPromptIndex;
                
                if (currentPrompt === 0) {
                    nextPromptIndex = (choiceId === 1) ? 1 : 6;
                } else if (currentPrompt === 1) {
                    nextPromptIndex = (choiceId === 1) ? 2 : 6;
                } else if (currentPrompt === 2) {
                    nextPromptIndex = (choiceId === 1) ? 3 : 4;
                } else if (currentPrompt === 3 || currentPrompt === 4) {
                    setChosenWeapon(choiceId === 1 ? 'knife' : 'stoker');
                    nextPromptIndex = 5;
                } else if (currentPrompt === 6) {
                    nextPromptIndex = (choiceId === 1) ? 7 : 10;
                } else if (currentPrompt === 7) {
                    nextPromptIndex = (choiceId === 1) ? 8 : 9;
                } else if (currentPrompt === 8) {
                    nextPromptIndex = (choiceId === 1) ? 3 : 4;
                } else if (currentPrompt === 9) {
                    nextPromptIndex = (choiceId === 1) ? 8 : 10;
                }
                
                setCurrentPrompt(nextPromptIndex);
                updateCurrentPrompt(username, nextPromptIndex)
                    .then(() => {
                        // Check if the chapter is completed
                        if (nextPromptIndex === prompts.length - 1) {
                            onChapterCompletion(); // Call onChapterCompletion if chapter is completed
                        }
                    })
                    .catch(error => console.error('Error updating current prompt:', error));
            })
            .catch(error => console.error('Error updating choice history:', error));
    };
    
    
    
    return (
        <div className='Chapter' style={{ backgroundImage: `url(${backgroundImages[currentPrompt]})` }}>
            <div className='Chapter-prompt'>
                <p>{promptData.prompt}</p>
                <div>
                    {promptData.choices.map(choice => (
                        <button key={choice.id} onClick={() => handleChoice(choice.id)}>
                            {choice.text}
                        </button>
                    ))}
                </div>          
            </div>
        </div>
    );
};

export default Chapter1;