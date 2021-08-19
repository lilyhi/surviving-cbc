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
                margin: '6px',
                backgroundColor: 'green',
                border: 'none',
                borderRadius: '10px',
                fontFamily: "'Lato', sans-serif",
                color: 'black',
                fontWeight: 'bold',
                boxShadow: '0 0 10px rgba(0, 0, 0, 1)'

            }}
            onClick={() => clickEvent(subject)}
        >
            {subject}
        </button>
    );
}

export default SubjectButton;