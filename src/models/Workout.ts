export class Workout {
    private id: number;
    private name: string;
    private muscleId: number;

    constructor(id: number, name: string, muscleId: number) {
        this.id = id;
        this.name = name;
        this.muscleId = muscleId;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getMuscleId() {
        return this.muscleId;
    }
}