import { useState } from 'react';

export interface usersData {
    name: string;
    age: number;
}

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 43 },
    { name: 'ike', age: 31 }
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState("");

    const [user, setUsers] = useState<usersData | undefined>();

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
        
        <input type="text" value={name} onChange={ (e) => { setName(e.target.value) }} />

        <button onClick={findUser}>Search User</button>
        </div>
}

export default UserSearch;