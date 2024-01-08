import ButtonMsg from 'src/components/ButtonMsg';
import RobotMsg from 'src/components/RobotMsg';
import UserMsg from 'src/components/UserMsg';
import styles from 'src/css/ChatContainer.module.scss'

type ChatProps = {
    messages:Message[]
    handleClick:(input:string)=>void
}

function ChatContainer(props:ChatProps) {

  return (
    <div className={styles.ChatContainer}>
        {props.messages.map((message,i)=>{
            switch(message.type) {
                case 'bot':
                    return <RobotMsg text={message.text} key={'msg'+i}/>
                case 'user':
                    return <UserMsg text={message.text} key={'msg'+i}/>
                default:
                    return <ButtonMsg text={message.text} key={'msg'+i} handleClick={props.handleClick}/>
            }
        })}
        {props.messages.length>0 && props.messages[props.messages.length-1].type==='user' &&
            <RobotMsg text='...' key='thinkingMsg'/>
        }
    </div>
  )
}

export default ChatContainer