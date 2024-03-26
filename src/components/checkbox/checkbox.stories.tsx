import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxCard, Checkbox, CheckboxGroup } from ".";

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
    children: "checkbox",
  },
};

export const WithOutLabel: Story = {
  args: {
    color: "primary",
  },
};

export const WithCheckboxCard: Story = {
  render: (args) => {
    return (
      <CheckboxGroup orientation="horizontal">
        <CheckboxCard value="card" {...args}>
          card
        </CheckboxCard>
        <CheckboxCard value="paypal" {...args}>
          paypal
        </CheckboxCard>
        <CheckboxCard value="apple" {...args}>
          apple
        </CheckboxCard>
      </CheckboxGroup>
    );
  },
};
