import {useState} from 'react'
import List from './List'
import Form from './Form'
function Contatcs() {
  const [contatcs, setContatcs] = useState([]);
  return (
    <div>
        <List/>
        <Form addContatcs={setContatcs}/>
    </div>
  )
}

export default Contatcs