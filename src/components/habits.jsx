import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };
    handleDecrease = habit => {
        this.props.onDecrease(habit);
    };
    handleDelete = habit => {
        this.props.onDelete(habit);
    };
    handleReset = () => {
        this.props.onReset();
    };
    render() {
        const habits = this.props.habits;
        return (
            <>
                <ul>
                    {habits.map(habit => (
                        <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrease={this.handleDecrease} onDelete={this.handleDelete}></Habit>
                    ))}
                </ul>
                <button className='habits-reset' onClick={this.handleReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;
