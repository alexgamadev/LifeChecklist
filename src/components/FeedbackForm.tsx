import './Feedback.css';

interface FeedbackFormProps {
    visible: boolean,
    nodeRef: React.RefObject<HTMLInputElement>
}

const FeedbackForm = (props: FeedbackFormProps) => {
    const formClasses = `feedback-form ${props.visible ? '' : 'hidden'}`
    return (
        <div className={formClasses} ref={props.nodeRef}>
            <h1>Test Modal</h1>
        </div>
    );
}

export default FeedbackForm;