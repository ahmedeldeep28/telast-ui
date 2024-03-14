import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date) => setDate(date)}
        className="rounded-md border"
      />
    );
  },
};

export const DateRange: Story = {
  render: () => {
    const [date, setDate] = useState({
      from: new Date(),
      to: new Date(),
    });
    return (
      <Calendar
        initialFocus
        mode="range"
        selected={date}
        onSelect={(date) => setDate(date)}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};
