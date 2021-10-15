import React, { useState } from 'react';
import NavBar from '../UI/NavBar';

import CourseGoalList from './components/CourseGoals/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput';
import './index.css';

const Goals = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <NavBar>
      <div>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />
        </section>
        <section id="goals">
          {content}
        </section>
      </div>
    </NavBar>
  );
};

export default Goals;
