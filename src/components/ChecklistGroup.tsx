import './Checklist.css';

interface GroupProps {
    title: string;
    children?: React.ReactNode;
}

const ChecklistGroup = (props: GroupProps) => {
    return (
        <>
            <h2 className='ChecklistGroup-Title'>{props.title}</h2>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default ChecklistGroup;