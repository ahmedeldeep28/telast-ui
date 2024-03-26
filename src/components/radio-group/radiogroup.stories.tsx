import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio, RadioCard } from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "Component/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <Radio value="default">default</Radio>
        <Radio value="comfortable">comfortable</Radio>
        <Radio value="compact">compact</Radio>
      </RadioGroup>
    );
  },
};

export const WithRadioCard: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <RadioCard value="card">card</RadioCard>
        <RadioCard value="paypal">paypal</RadioCard>
        <RadioCard value="apple">apple</RadioCard>
      </RadioGroup>
    );
  },
};
