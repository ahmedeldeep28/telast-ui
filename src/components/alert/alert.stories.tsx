import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertText, AlertTitle } from ".";

const meta: Meta<typeof Alert> = {
  title: "Component/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "danger",
  },
  render: (args) => {
    return (
      <Alert {...args}>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertText>
          You can add components and dependencies to your app using the cli.
        </AlertText>
      </Alert>
    );
  },
};
