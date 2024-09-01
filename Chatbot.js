import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const responses = {
    "closing time": "The closing time is 8 p.m.",
    "wheelchair facilities": "We provide wheelchair facilities. You can rent one at the reception.",
    "audio guides": "Yes! The museum has audio guides at every corner, and braille script is available for blind visitors.",
    "cleanliness": "We follow a strict cleaning schedule. Display cases are dusted daily, and each floor is cleaned daily to maintain hygiene.",
    "covid-19 precautions": "We adhere to all health and safety protocols, including social distancing, hand sanitizers at every floor, and temperature checks.",
    "ticket prices": "Ticket prices are as follows:\n• Adults: ₹1200\n• Children (6 to 17 years): ₹600\n• Seniors (65 and over): ₹900\nChildren under 6 years enter for free.",
    "school trip prices": "Ticket prices for school trips are ₹200 per child and ₹500 per adult.",
    "book tickets": "You can book tickets online through our website or at our offline ticket counters to avoid rush.",
    "visit time": "The museum visit can take between 1-1.5 hours for a quick look and up to 3-4 hours for a detailed exploration.",
    "knowledge gain": "The museum offers insights into ancient India and Indian mythologies such as Ramayana and Mahabharata.",
    "visiting hours": "The museum is open from 10:00 AM to 6:00 PM, Monday through Saturday, and from 12:00 PM to 5:00 PM on Sundays. We are closed on major holidays like New Year's Day and Christmas.",
    "special exhibits": "Currently, we have a special exhibit titled 'Masters of Impressionism' featuring works by Monet and Degas. 'Museum Night' on September 10th offers extended hours, live music, and discounts.",
    "discounts": "We offer discounts for students with valid ID, military personnel, veterans, and groups of 10 or more with advance booking.",
    "location": "The museum is located in Connaught Place, and the nearest metro station is Rajiv Chowk on the yellow line.",
    "photos and videos": "Visitors are allowed to take photos and videos in the museum.",
    "id proof": "You need to carry an ID proof such as Aadhar Card, Driving License, or School/College ID. Both soft and hard copies are accepted.",
    "virtual tour": "You can take a virtual tour of our museum by clicking [here](#).",
    "crowd management": "Currently, the museum is moderately crowded. It is best to visit during early hours or late afternoons.",
    "navigation": "For navigation, please use our interactive map [here](#).",
    "voice command": "Voice command is enabled. Please speak clearly into the microphone.",
    "feedback": "We value your feedback! Please leave your comments below.",
    "membership": "To check your membership status or sign up, please click [here](#).",
    "social media": "Share your experience on social media! Click [here](#) to share.",
    "dynamic pricing": "We offer special discounts during weekdays and off-peak hours. Check the current offers [here](#).",
    "accessibility": "We support text-to-speech and other accessibility features. Please click [here](#) to access these features.",
    "events": "To add our events to your calendar, please click [here](#)."
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      const newMessages = [...messages, { sender: 'user', text: userInput }];
      setMessages(newMessages);
      processInput(userInput.toLowerCase().trim());
      setUserInput('');
    }
  };

  const processInput = (input) => {
    const botResponse = getResponse(input) || getFallbackResponse(input);
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
  };

  const getResponse = (input) => {
    const keywords = Object.keys(responses);
    const match = keywords.find(keyword => input.includes(keyword));
    return match ? responses[match] : null;
  };

  const getFallbackResponse = (input) => {
    const suggestedQuestions = [
      "What are the ticket prices?",
      "What are the museum's visiting hours?",
      "How can I book tickets?",
      "Are there any special exhibits or events?",
      "Can I take a virtual tour?",
      "How do I navigate the museum?"
    ];

    return `I'm sorry, I didn't understand that. Here are some things you can ask:\n• ${suggestedQuestions.join('\n• ')}`;
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
