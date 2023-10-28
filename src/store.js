import { create } from "zustand";

const store = (set) => ({
  tasks: [
    { title: "Test task", state: "DONE" },
    { title: "Test ONGOING", state: "ONGOING" },
  ],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
});

export const useStore = create(store);
