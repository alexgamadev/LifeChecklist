import './ChecklistForm.css';

interface FormProps {
    children: React.ReactNode[];
}

const ChecklistForm = (props: FormProps) => {
    return (
        <form className='ChecklistForm'>
            {props.children}
        </form>
    )
}

export default ChecklistForm;