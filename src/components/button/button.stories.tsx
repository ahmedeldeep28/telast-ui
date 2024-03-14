import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { User, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "click me",
  },
};

export const IsLoading: Story = {
  args: {
    children: "loading",
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: <User className="size-5" />,
    isIconOnly: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="h-4 w-4" />
        Login with Email
      </>
    ),
  },
};

export const WithEndIcon: Story = {
  args: {
    children: (
      <>
        Login with Email
        <Mail className="h-4 w-4" />
      </>
    ),
  },
};
