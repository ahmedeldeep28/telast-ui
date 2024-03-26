import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { User } from "lucide-react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Component/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
  },
};

export const WithIcon: Story = {
  args: {
    fallback: <User className="size-5" />,
  },
};

export const WithText: Story = {
  args: {
    fallback: "DP",
  },
};
