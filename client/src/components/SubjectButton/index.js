import React from 'react';

const SubjectButton = ({ clickEvent, subject }) => {


    return (
        <button
            type="button"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '3REM',
                padding: '.5REM',
                margin: '12px',
                backgroundColor: 'lightgray',
                

            }}
            onClick={() => clickEvent(subject)}
        >
            {subject}
        </button>
    );
}

export default SubjectButton;