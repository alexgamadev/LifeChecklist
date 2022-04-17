import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './Feedback.css';

interface FeedbackFormProps {
    visible: boolean,
    nodeRef: React.RefObject<HTMLInputElement>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const FeedbackForm = (props: FeedbackFormProps) => {
    const { visible } = props;
    const formClasses = `feedback-container ${visible ? '' : 'hidden'}`;
    const textInput = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        textInput.current?.focus();
    })

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted with text: " + textInput.current?.value);

        props.setVisible(false);

        Swal.fire({
            titleText: 'Feedback Submitted!',
            icon: 'success'
        });

        if (textInput.current) {
            textInput.current.value = "";
        }
    }

    return (
        <div className={formClasses} ref={props.nodeRef}>
            <form onSubmit={onFormSubmit} className={"feedback-form"}>
                <h1>Test Modal</h1>
                <textarea className={"feedback-textbox"} ref={textInput} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default FeedbackForm;