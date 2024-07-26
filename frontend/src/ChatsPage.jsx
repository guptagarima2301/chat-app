import {MultiChatSocket, MultiChatWindow,
    useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('4af1c4da-440d-49bc-8588-d6728f3fd2aa',
        props.user.username,
        props.user.secret);

    return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps}  style={{ height:'100%'}}/>
    
    
    
    </div>
    )
  };
  export default ChatsPage;