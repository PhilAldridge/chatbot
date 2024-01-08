import { useState } from 'react';
import TopicHeader from './components/TopicHeader';
import styles from './css/App.module.scss'
import ChatContainer from './components/ChatContainer';
import InputBar from './components/InputBar';

function App() {
  const [topic,setTopic]=useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVisible, setInputVisible] = useState(true);

  if(topic==='' && messages.length===0) {
      setInputVisible(false)
      setMessages([{
          type: 'bot',
          text: 'Hello, I am here to help you to find out more about Enterprise Agile. '
      }]);
      setTimeout(()=>{
          setMessages((messages)=>[...messages, {
              type: 'bot',
              text: 'To begin, choose one of the frequently asked questions below, or type your own question at the bottom of the page: '
          }])
      },1000)

      setTimeout(()=> {
          setMessages((messages)=>[...messages, {
              type: 'button',
              text: 'What is included in the Enterprise Agile book?'
          },{
              type: 'button',
              text: 'What type of business is the Enterprise Agile approach appropriate for?'
          },{
              type: 'button',
              text: 'Is Enterprise Agile relevant to a specific industry or sector?'
          },{
              type: 'button',
              text: 'Does Enterprise Agile account for projects with large vendor ecosystems?'
          },])
          setInputVisible(true)
      },2000)
  }

  return (
    <div className={styles.App}>
      <div className={styles.ChatBar}>
        <TopicHeader topic={topic} newTopic={newTopic}/>
        <ChatContainer messages={messages} handleClick={handleSubmit}/>
        {inputVisible && <InputBar handleSubmit={handleSubmit} />}

      </div>
      
    </div>
  );

  function newTopic() {
    setTopic('');
    setMessages([{
      type: 'bot',
      text: 'What would you like to ask about now?'
    }])
  }

  function handleSubmit(input:string) {
    const newMessage:Message = {
      type:'user', text:input
    };
    if(topic==='') {
      setMessages([newMessage])
      setTopic(input)
    } else {
      setMessages([...messages,newMessage])
    }
    
  }
}



export default App;
