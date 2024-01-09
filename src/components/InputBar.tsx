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
            onKeyDown={(e)=>handleInput(e)}
        ></input>
        <button className={styles.InputButton} disabled={input===''} onClick={submitPrompt} >
            <img src='images/sendIcon.png' alt="Send" className={styles.InputIcon} />
        </button>
    </div>
  )

  function handleInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key !== 'Enter' || input==='') return;
    submitPrompt()
  }

  function submitPrompt() {
    setInput('');
    props.handleSubmit(input)
  }
}

export default InputBar