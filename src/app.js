import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';
class App extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reacing', count: 0 },
            { id: 2, name: 'Reacing', count: 0 },
            { id: 3, name: 'Reacing', count: 0 },
        ],
    };
    handleIncrement = habit => {
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });
        this.setState({ habits });
    };
    handleDecrease = habit => {
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });
        this.setState({ habits });
    };
    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };
    handleAdd = name => {
        // const habits = this.state.habits.filter(item => item.id !== habit.id);
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];

        this.setState({ habits });
    };
    handleResset = () => {
        const habits = this.state.habits.map(habit => {
            // habit.count = 0;
            if (habit.count > 0) return { ...habit, count: 0 };
            return habit;
            //    return habit;
        });
        this.setState({ habits });
    };
    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />

                <HabitAddForm onAdd={this.handleAdd} />
                <Habits habits={this.state.habits} onReset={this.handleResset} onDelete={this.handleDelete} onDecrease={this.handleDecrease} onIncrement={this.handleIncrement}></Habits>
            </>
        );
    }
}

export default App;
