import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio, AdvancedRadio } from ".";

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

export const WithAdvanced: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <AdvancedRadio value="card">card</AdvancedRadio>
        <AdvancedRadio value="paypal">paypal</AdvancedRadio>
        <AdvancedRadio value="apple">apple</AdvancedRadio>
      </RadioGroup>
    );
  },
};
