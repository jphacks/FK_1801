export interface Calorie {
  id: number;
  name: string;
  type: Type;
  calorie: number;
  timestamp: string;
}

export enum Type {
  food = 'food',
  excercise = 'excercise'
}
