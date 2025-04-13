import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";
import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";

export function App() {
  const workout = { exercise: "", weight: "", sets: "", reps: "" };

  const [alterLogo, setAlterLogo] = useState(false);
  const [workouts, setWorkouts] = useState([workout]);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const addRow = () => {
    setWorkouts([
      ...workouts,
      { exercise: "", weight: "", sets: "", reps: "" },
    ]);
  };

  const updateRow = (index: number, field: string, value: string) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index][field as keyof typeof workout] = value;
    setWorkouts(updatedWorkouts);
  };

  return (
    <view>
      <view className="App">
        <view className="Content">
          <text className="Title">Workout Logger</text>
          <scroll-view>
            <view>
              <view className="TableHeader">
                <text>Exercise</text>
                <text>Weight (kg)</text>
                <text>Sets</text>
                <text>Reps</text>
              </view>
              {workouts.map((workout, index) => (
                <view key={index} className="TableRow">
                  <input
                    value={workout.exercise}
                    placeholder="Exercise"
                    onInput={(e) =>
                      updateRow(index, "exercise", e.currentTarget.value)
                    }
                  />
                  <input
                    value={workout.weight}
                    placeholder="Weight"
                    onInput={(e) =>
                      updateRow(index, "weight", e.currentTarget.value)
                    }
                  />
                  <input
                    value={workout.sets}
                    placeholder="Sets"
                    onInput={(e) =>
                      updateRow(index, "sets", e.currentTarget.value)
                    }
                  />
                  <input
                    value={workout.reps}
                    placeholder="Reps"
                    onInput={(e) =>
                      updateRow(index, "reps", e.currentTarget.value)
                    }
                  />
                </view>
              ))}
            </view>
          </scroll-view>
          <view bindtap={addRow}>Add Exercise</view>
        </view>
      </view>
    </view>
  );
}
