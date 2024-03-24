import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedCheckbox, Checkbox, CheckboxGroup } from ".";

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

export const WithAdvanced: Story = {
  render: (args) => {
    return (
      <CheckboxGroup orientation="horizontal">
        <AdvancedCheckbox value="card" {...args}>
          card
        </AdvancedCheckbox>
        <AdvancedCheckbox value="paypal" {...args}>
          paypal
        </AdvancedCheckbox>
        <AdvancedCheckbox value="apple" {...args}>
          apple
        </AdvancedCheckbox>
      </CheckboxGroup>
    );
  },
};
