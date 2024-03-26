import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from ".";

const meta: Meta<typeof Combobox> = {
  title: "Component/Combobox",
  component: Combobox,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Combobox
        options={[
          {
            label: "Apple",
            value: "Apple",
          },
          {
            label: "Banana",
            value: "Banana",
          },
          {
            label: "Blueberry",
            value: "Blueberry",
          },
          {
            label: "Grapes",
            value: "Grapes",
          },
        ]}
        {...args}
      />
    );
  },
};
