import styles from 'src/css/ChatContainer.module.scss'

function RobotMsg(props:MessageProps) {
  return (
    <div className={styles.MsgContainer}>
        <div className={`${styles.RobotMsg} ${styles.Msg}`}>{props.text}</div>
        <div className={styles.MsgPadder}></div>
    </div>
  )
}

export default RobotMsg