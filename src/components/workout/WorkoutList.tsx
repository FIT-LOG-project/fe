import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Workout } from "../../models/Workout";

interface Props {
  muscleValue: number;
  searchValue: string;
}

export default function WorkoutList({ muscleValue, searchValue }: Props) {
  const [checked, setChecked] = useState([0]);

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

  const workouts: Workout[] = [
    new Workout(1, "벤치프레스", 1),
    new Workout(2, "랫풀다운", 2),
    new Workout(3, "스쿼트", 3),
    new Workout(4, "바벨 컬", 5),
    new Workout(5, "바벨 컬1", 5),
    new Workout(6, "바벨 컬2", 5),
    new Workout(7, "바벨 컬3", 5),
    new Workout(8, "바벨 컬4", 5),
    new Workout(9, "바벨 컬5", 5),
    new Workout(10, "바벨 컬6", 5),
    new Workout(11, "바벨 컬7", 5),
    new Workout(12, "바벨 컬8", 5),
    new Workout(13, "바벨 컬9", 5),
    new Workout(14, "바벨 컬10", 5),
    new Workout(15, "바벨 컬11", 5),
    new Workout(16, "바벨 컬12", 5),
    new Workout(17, "바벨 컬13", 5),
    new Workout(18, "바벨 컬14", 5),
    new Workout(19, "바벨 컬15", 5),
    new Workout(20, "바벨 컬16", 5),
  ];

  let workoutFilter = workouts.filter((workout: Workout) => {
    if (muscleValue == 0) {
      return workouts;
    }

    return workout.getMuscleId() == muscleValue;
  });

  workoutFilter = workoutFilter.filter((workout: Workout) => {
    return workout.getName().includes(searchValue);
  });

  const listWorkouts = workoutFilter.map((workout: Workout) => (
    <ListItem
      key={workout.getId()}
      sx={{
        paddingX: 0,
        height: "64px",
        mb: "10px",
      }}
    >
      <ListItemButton
        role={undefined}
        onClick={handleToggle(workout.getId())}
        sx={{
          paddingX: "5px",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: '30px',
          }}
        >
          <Checkbox
            edge="start"
            checked={checked.includes(workout.getId())}
            tabIndex={-1}
            disableRipple
            size="small"
          />
        </ListItemIcon>

        <ListItemText>{workout.getName()}</ListItemText>
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
