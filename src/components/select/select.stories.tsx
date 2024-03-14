import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectGroup, SelectItem, SelectLabel } from ".";

const meta: Meta<typeof Select> = {
  title: "Component/Select",
  component: Select,

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
    );
  },
};

export const WithGroup: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Animal</SelectLabel>
          <SelectItem value="cat">cat</SelectItem>
          <SelectItem value="dog">dog</SelectItem>
          <SelectItem value="lion">lion</SelectItem>
          <SelectItem value="tiger">tiger</SelectItem>
          <SelectItem value="shark">shark</SelectItem>
        </SelectGroup>
      </Select>
    );
  },
};
