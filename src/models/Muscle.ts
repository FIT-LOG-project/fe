export class Muscle {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }
}
