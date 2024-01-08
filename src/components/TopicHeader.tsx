import styles from 'src/css/TopicHeader.module.scss'

type HeaderProps = {
    topic:string
    newTopic:()=>void
}

function TopicHeader(props:HeaderProps) {
  return (
    <div className={styles.Header}>
        <a href="https://bjss.com"><img className={styles.Logo} src='images/BJSS-Logo-Black&Orange-RGB.svg' alt="BJSS"/></a>
        {props.topic===''? 
            <div className={styles.HeaderTitle}>AIEAN</div>
            :
            <>
                <div className={styles.HeaderTopic}><b>Current Topic: </b>{props.topic}</div>
                <div className={styles.NewTopicButton} onClick={props.newTopic}>Ask about something else</div>
            </>
        }
        <button className={styles.HeaderInfo}>i</button>
    </div>
  )
}

export default TopicHeader