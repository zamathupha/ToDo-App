# ToDo-App
Task Manager
This project is a simple Task Manager application built with Ionic and Angular. The application allows users to add, mark as completed, and delete tasks.

Features
Add Task: Users can add new tasks by entering a task name and clicking the "Add Task" button.

Mark as Completed: Users can mark tasks as completed by clicking the "Completed" button.

Delete Task: Users can delete tasks by clicking the "Delete" button.

Code Overview
HomePage Component
The HomePage component is the main component of the application. It manages the task list and provides functions for adding, marking as completed, and deleting tasks.

Variables
newTask: A string that holds the new task input.

tasks: An array that holds the list of tasks, each with a name and completed status.

Functions
addTask(): Adds a new task to the task list.

deleteTask(index: number): Deletes a task from the task list at the specified index.

completeTask(index: number): Marks a task as completed at the specified index.

Template
The template includes the following elements:

Deploy Netlify incomparable-gnome-cf601d.netlify.app

Input Field: Allows users to enter a new task.

Add Task Button: Triggers the addTask function to add a new task.

Task List: Displays the list of tasks with checkboxes to mark them as completed and buttons to delete them.
