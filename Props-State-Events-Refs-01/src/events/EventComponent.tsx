const EventComponent: React.FC = () => {

    // the Event Function
    // ChangeEvent for text inputs
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    // Event Handler for Drag
    const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    } 

    return <div>
        <input onChange={onChange} />

        {/* the DRAG Event */}
        <div draggable onDragStart={onDrag}>
            Drag Me..
        </div>
    </div>
};

export default EventComponent;