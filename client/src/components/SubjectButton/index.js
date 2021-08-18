import React from 'react';

const SubjectButton = ({clickEvent, subject}) => {


    return (
        <button 
            className="dropdown-item"
            type="button"
            onClick={() => clickEvent(subject)}
        >
             {subject}
        </button>
    );
}

export default SubjectButton;