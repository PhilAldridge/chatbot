import { useState } from 'react'
import styles from 'src/css/InputBar.module.scss'

type InputProps = {
    handleSubmit: (input:string)=>void
}

function InputBar(props:InputProps) {
    const [input,setInput] = useState('');


  return (
    <div className={styles.InputBar}>
        <input 
            type='text' 
            className={styles.InputText} 
            placeholder='Write a message...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
        ></input>
        <button className={styles.InputButton} onClick={()=>{
            setInput('');
            props.handleSubmit(input)
        }} >
            <img src='images/sendIcon.png' alt="Send" className={styles.InputIcon} />
        </button>
    </div>
  )
}

export default InputBar