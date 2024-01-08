type Message = {
    type:'bot'|'user'|'button',
    text:string
}

interface MessageProps {
    text:string
}

interface ButtonMessageProps extends MessageProps {
    handleClick:(input:string)=>void
}