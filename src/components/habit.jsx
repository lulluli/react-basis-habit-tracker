import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    state = { count: 0 };
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrease = () => {
        this.props.onDecrease(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;

        return (
            <>
                <li className='habit'>
                    <span className='habit-name'>{name}</span>
                    <span className='habit-count'>{count}</span>
                    <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                        <i className='fas fa-plus-circle'></i>
                    </button>
                    <button onClick={this.handleDecrease} className='habit-button habit-decrease'>
                        <i className='fas fa-minus-circle'></i>
                    </button>{' '}
                    <button className='habit-button habit-delete' onClick={this.handleDelete}>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                </li>
            </>
        );
    }
}

export default Habit;
