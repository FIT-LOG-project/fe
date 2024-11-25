import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import instance from "../../api/axiosInstance";
import { Workout } from "../../models/Workout";

interface Props {
  muscleValue: number;
  searchValue: string;
}

export default function WorkoutList({ muscleValue, searchValue }: Props) {
  const [checked, setChecked] = useState([0]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [filterdWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);

  const handleToggle = (workoutId: number) => () => {
    const currentIndex = checked.indexOf(workoutId);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(workoutId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const getWorkout = async () => {
    await instance
      .get("workout")
      .then(function (response) {
        setWorkouts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getWorkout();
  }, []);

  const filterWorkouts = (): Workout[] => {
    return workouts.filter((workout) => {
      const muscleMatch: boolean =
        muscleValue === 0 || workout.muscleId === muscleValue;
      const nameMatch: boolean = workout.name.includes(searchValue);

      return muscleMatch && nameMatch;
    })
  }

  useEffect(() => {
    setFilteredWorkouts(filterWorkouts());
  }, [muscleValue, searchValue, workouts]);

  const listWorkouts = filterdWorkouts.map((workout: Workout) => (
    <ListItem
      key={workout.id}
      sx={{
        paddingX: 0,
        height: "64px",
        mb: "10px",
      }}
    >
      <ListItemButton
        role={undefined}
        onClick={handleToggle(workout.id)}
        sx={{
          paddingX: "5px",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: "30px",
          }}
        >
          <Checkbox
            edge="start"
            checked={checked.includes(workout.id)}
            tabIndex={-1}
            disableRipple
            size="small"
          />
        </ListItemIcon>

        <ListItemText>{workout.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <List
        sx={{
          height: "500px",
        }}
      >
        {listWorkouts}
      </List>
    </>
  );
}
