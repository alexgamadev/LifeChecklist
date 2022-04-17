import { useState } from 'react';
import useDetectClickOut from '../hooks/useDetectClickOut';
import './Feedback.css';
import FeedbackForm from './FeedbackForm';

const FeedbackButton = (props: any) => {
    const { setShow, show, triggerRef, nodeRef } = useDetectClickOut(false);

    return (
        <>
            <div ref={triggerRef}>
                <button type={"button"} className={props.className} >
                    Give Feedback
                </button>
            </div>
            <FeedbackForm visible={show} nodeRef={nodeRef} setVisible={setShow} />
        </>
    );
}

export default FeedbackButton;