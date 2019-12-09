import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Component/Layout";
import Exercises from "./Component/Exercises";
import { muscles, exercises } from "./store";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExercisesSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExercisesSelect}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
