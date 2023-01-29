import { Child } from './Child';
// import { ChildAsFC } from './Child';

const Parent = () => {
    return <Child 
    color="Red" onClick={ () => {console.log("He.. from Child")}} />;
    
    // <ChildAsFC 
    // color="Red" onClick={ () => {console.log("He.. from Child")}} />;
}

export default Parent; 