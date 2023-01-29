// # With TS we Need to Provide TYPES of Props
// We Can Use interface
interface ChildProps {
    color: string;
    // Dealing with Buttons
    onClick: () => void;
//   children?: React.ReactNode;
}

// This Apprach has Downside i.e TS Dosent Know its a REACT COMPONENT
export const Child = ({ color, onClick }: ChildProps) => {
    // return <div>{props.color}</div>
    return <div>{color}
    {/* The Button */}
    <button onClick={onClick}>Click me</button>
    </div>;
};
// These will Not work
// Child.defaultProps
// Child.displayName

// Best Approach i.e TS Knows its a REACT Component
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>{color}
    {/* The Button */}
    <button onClick={onClick}>Click me</button>
    </div>;
};
// These will work
// ChildAsFC.defaultProps
// ChildAsFC.displayName