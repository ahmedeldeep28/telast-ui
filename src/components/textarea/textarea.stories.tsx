import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Component/Textarea",
  component: Textarea,
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
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder input",
  },
};

export const IsInvalid: Story = {
  args: {
    isInvalid: true,
    value: "is Invalid input",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "disabled input",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "ReadOnly input",
  },
};
