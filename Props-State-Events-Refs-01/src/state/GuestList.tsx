import { useState } from 'react';

const GuestList: React.FC = () => {
    const [input, setInput] = useState("")

    // Defining the Type
    const [guestList, setGuestList] = useState<string[]>([]);

    const addToList = () => {
        setInput('');
        setGuestList([...guestList, input]);
    }

    return <div>
        <h3>Guest List</h3>
        <ul>
        {guestList.map( (guest, i) => {
            // return <p>{i + 1} : {guest}</p>
            return <li key={i}>{guest}</li>
        })}
        </ul>


        <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } />

        <button type="submit" onClick={addToList} >Add</button>
        </div>;
};

export default GuestList;