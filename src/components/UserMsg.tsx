import styles from 'src/css/ChatContainer.module.scss'

function UserMsg(props:MessageProps) {
  return (
    <div className={styles.MsgContainer}>
        <div className={styles.MsgPadder}></div>
        <div className={`${styles.UserMsg} ${styles.Msg}`}>{props.text}</div>
    </div>
  )
}

export default UserMsg