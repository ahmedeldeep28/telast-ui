import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Component/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    children: "checkboox",
  },
};

export const WithOutLabel: Story = {
  args: {
    color: "primary",
  },
};
