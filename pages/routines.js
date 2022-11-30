import {ExercisesHeader} from "../components/Exercises/ExercisesHeader";
import Navigation from "../components/Navigation";
import {WorkoutHeader} from "../components/Routines/RoutinesHeader";

const routines = () => {
  return (
    <>
      <WorkoutHeader />
      <ExercisesHeader />
      <Navigation />;
    </>
  );
};

export default routines;
