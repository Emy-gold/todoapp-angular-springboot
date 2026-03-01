export interface Todo {
  id?: number; // ? means optional
  title: string;
  description?: string;
  completed: boolean;
}
