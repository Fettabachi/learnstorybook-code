import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  decorators: [withKnobs],
  parameters: { assets: ["designs/items.png"] },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

const LongTitleString =
  "Thanks to quickly being able to try different inputs to a component we can find and fix such problems with relative ease! Let's fix the issue with overflowing by adding a style to Task.js";

export const Default = () => {
  return <Task task={object("task", { ...taskData })} {...actionsData} />;
};
export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);

export const WithLongTitle = () => (
  <Task task={{ ...taskData, title: LongTitleString }} {...actionsData} />
);
