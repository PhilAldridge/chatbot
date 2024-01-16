import { useEffect, useState } from 'react';
import TopicHeader from './components/TopicHeader';
import styles from './css/App.module.scss'
import ChatContainer from './components/ChatContainer';
import InputBar from './components/InputBar';

const starterMessages:Message[] = [
  {type:'bot', text:'Hello, I am here to help you to find out more about Enterprise Agile. '},
  {type: 'bot', text: 'To begin, choose one of the frequently asked questions below, or type your own question at the bottom of the page: '},
  {type: 'button', text: 'What is included in the Enterprise Agile book?'},
  {type: 'button', text: 'What type of business is the Enterprise Agile approach appropriate for?'},
  {type: 'button', text: 'Is Enterprise Agile relevant to a specific industry or sector?'},
  {type: 'button', text: 'Does Enterprise Agile account for projects with large vendor ecosystems?'}
]

function App() {
  const [topic,setTopic]=useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageQueue, setMessageQueue] = useState<Message[]>(starterMessages);

  useEffect(()=>{
    if(messageQueue.length>0) {
      const timeoutDuration = messages.length!==0 && messages[messages.length-1].type==='button'? 200 : 1000;
      setTimeout(()=>{
        setMessages((messages)=>[...messages, messageQueue[0]])
        setMessageQueue((messages)=>messages.slice(1))
      },timeoutDuration)
    }
  },[messageQueue, messages])

  return (
    <div className={styles.App}>
      <div className={styles.ChatBar}>
        <TopicHeader topic={topic} newTopic={newTopic}/>
        {false && <ChatContainer messages={messages} handleClick={handleSubmit}/>}
        <div id="webchat" role="main"></div>
        {messageQueue.length===0 && <InputBar handleSubmit={handleSubmit} />}

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
