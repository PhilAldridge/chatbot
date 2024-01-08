import styles from 'src/css/ChatContainer.module.scss'

function ButtonMsg(props:ButtonMessageProps) {
  return (
    <div className={`${styles.ButtonMsg} ${styles.Msg}`} onClick={()=>props.handleClick(props.text)}>{props.text}</div>
  )
}

export default ButtonMsg