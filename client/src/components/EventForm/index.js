import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_EVENT } from '../../utils/mutations';
import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';

const EventForm = () => {
    const [eventText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addEvent, { error }] = useMutation(ADD_EVENT, {
        update(cache, { data: { addEvent } }) {
            try {
                const { events } = cache.readQuery({ query: QUERY_EVENTS });
                cache.writeQuery({
                    query: QUERY_EVENTS,
                    data: { thoughts: [addEvent, ...events] }
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, events: [...me.events, addEvent] } }
            });
        }
    });

    // update state based on form input changes
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addEvent({
                variables: { eventText }
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Give a brief description, date/time of event including time zone, and any pertinent links. "
                    value={eventText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EventForm;
