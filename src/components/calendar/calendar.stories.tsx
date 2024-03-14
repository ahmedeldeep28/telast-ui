import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import { Calendar } from ".";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
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

export const WithDateRange = {
  render: () => {

    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });

    return (
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    );
  },
};
