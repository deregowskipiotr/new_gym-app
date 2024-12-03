import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function Workout(props) {

  const { workout } = props;
  return (
      <SectionWrapper
        id = {'workout'}
        header={"welcome to"}
        title={["The", "DANGER", "zone"]}
      >
        <div className="flex flex-col gap-4">
          {workout.map((exercise, i) => {
            return (
              <ExerciseCard i = {i} exercise = {exercise} key = {i}/>
            )
          })}
        </div>
      </SectionWrapper>
  );
}

// Define prop types for Workout component
Workout.propTypes = {
  workout: PropTypes.array.isRequired, // Expecting workout to be an array and required
};