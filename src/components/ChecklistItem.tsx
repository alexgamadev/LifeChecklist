import './ChecklistForm.css';

interface ChecklistProps {
    text: string;
    key: number;
    toggled?: boolean;
}

const ChecklistItem = (props: ChecklistProps) => {
    const checklistId = `item${props.key}`;
    return (
        <div className='ChecklistItem'>
            <input type="checkbox" id={checklistId} name={checklistId} checked={props.toggled} />
            <label htmlFor={checklistId}>{props.text}</label><br /><br />
        </div>
    );
}

export default ChecklistItem;