import { useState, useRef, useEffect } from 'react';

// # Using the useRef Hook

export interface usersData {
    name: string;
    age: number;
};

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 43 },
    { name: 'ike', age: 31 }
];

const UserSearch: React.FC = () => {
    // useRef Hook
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState("");

    const [user, setUsers] = useState<usersData | undefined>();

    // useEffect Hook
    useEffect( () => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus()
    }, [])

    const findUser = () => {
        const foundUser = users.find( (user) => {
            return user.name === name;
        });
        setUsers(foundUser);
    }

    return <div>
        <h3>User Search</h3>
        <ul>
            {user && user.name} {" "} 
            {user && user.age}
        </ul>
        
        <input 
        ref={inputRef} 
        type="text" 
        value={name} 
        onChange={ (e) => { setName(e.target.value) }} />

        <button onClick={findUser}>Search User</button>
        </div>
}
