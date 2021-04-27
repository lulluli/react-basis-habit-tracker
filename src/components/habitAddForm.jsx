import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const state = { name: '' };
    const inputRef = React.createRef();
    const handleAdd = name => {
        props.onAdd(name);
    };
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    };
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} className='add-input'></input>
            <button className='add-button'>add</button>
        </form>
    );
});

export default HabitAddForm;
