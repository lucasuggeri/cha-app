
import { useEffect, useState, render } from 'react';
import { View, Text , TextInput, TouchableOpacity} from 'react-native';
import { WebSocket } from 'react-native';


Server = ({sendMessage})=> {
  const [messageReceived, setMessageReceived] = useState('');


useEffect(()=>{
  const ws = new WebSocket('ws://localhost:8080');
  
  ws.on('error', console.error);
  
  ws.on('open', () => {
    setMessage('Server connected!');
  });
  
  ws.on('message', (data) =>{
setMessage(data)
  });
  ws.on('close', () => {
    setMessage('Server disconnected!');
  });
  setSocket(ws);

  return () => {
    ws.close();
  }
}, []);

    return (
      <View>
          <Text>{messageReceived}</Text>
      </View>
    );
}
export default Server;