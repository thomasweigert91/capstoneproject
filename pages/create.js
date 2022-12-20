import {CreateHeader} from "../components/Create/CreateHeader";
import CreateContainer from "../components/Create/CreateContainer";
import {useEffect, useState} from "react";

const Create = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [workouts, setWorkouts] = useState(() => {
    return JSON.parse(localStorage.getItem("workouts")) ?? [];
  });

  function handleSave() {
    const workout = {
      id: Date.now(),
      name: workoutName,
      exercises: selectedExercises,
    };
    setWorkouts([...workouts, workout]);
  }
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  function handleWorkoutNameChange(event) {
    setWorkoutName(event.target.value);
  }

  function toggleExercise(exercise) {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.filter(e => e !== exercise));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  }
  console.log(selectedExercises);

  return (
    <>
      <CreateHeader
        handleSave={handleSave}
        selectedExercises={selectedExercises}
        handleWorkoutNameChange={handleWorkoutNameChange}
      />
      <CreateContainer
        selectedExercises={selectedExercises}
        toggleExercise={toggleExercise}
      />
    </>
  );
};

export default Create;
