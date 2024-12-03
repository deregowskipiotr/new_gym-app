import { useState, useRef, useEffect } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./utils/functions";




function App() {
  
  const [workout, setWorkout] = useState(null);
  const workoutRef = useRef(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    if(muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({ poison, muscles, goal })
    //console.log("Generated Workout:", newWorkout);
    setWorkout(newWorkout);

    window.location.href = '#workout'
  }

  useEffect(() => {
    if (workout) {
      // Scroll to workout section when workout is updated
      workoutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [workout]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (
        <div ref={workoutRef}>
          {" "}
          {/* Attach ref here */}
          <Workout workout={workout} />
        </div>
      )}
    </main>
  );
}

export default App
