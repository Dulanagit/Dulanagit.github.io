import aimaxImage from '../assets/aimax.jpeg';
import studybuddyImage from '../assets/studybudy.png';
import travelagentImage from '../assets/travelagent.png';

export const engineering = [
  {
    id: 'eng-1',
    title: 'StudyBuddy Chatbot',
    summary: 'A chatbot that helps students with their studies by providing information and answering questions based on their course materials.',
    image: studybuddyImage,
    href: 'https://chatwithstudybuddy.streamlit.app/',
    tags: ['Full-stack', 'Streamlit', 'Python', 'Langchain'],
  },
  {
    id: 'eng-2',
    title: 'TravelAgent',
    summary: 'A travel agent that helps users plan their trips within Sri Lanka by providing weather information and places to visit.',
    image: travelagentImage,
    href: 'https://github.com/Dulanagit/TravelAgent.git',
    tags: ['Agentic', 'Streamlit', 'Python', 'LangGraph', 'API'],
  },
  {
    id: 'eng-3',
    title: 'AIMax - Game Playing Robot',
    summary: 'A robot that controls a steering wheel, pedals and a gmaing controller to play car racing games and gaming controller games.',
    image: aimaxImage,
    href: 'https://github.com/AIMax-Project-Space',
    tags: ['Microcontroller', 'ESP32', 'Hardware'],
  }
  
];
