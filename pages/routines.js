import Navigation from "../components/Navigation";
import RoutinesContainer from "../components/Routines/RoutinesContainer";
import {WorkoutHeader} from "../components/Routines/RoutinesHeader";
const Routines = () => {
  return (
    <>
      <WorkoutHeader />
      <RoutinesContainer />
      <Navigation />
    </>
  );
};

export default Routines;
