import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TooltipProvider, Tooltip } from ".";
import { Button } from "../button";
import { Edit } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Component/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "edit",

  },
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip {...args}>
          <Button size="sm" isIconOnly>
            <Edit className="size-4" />
          </Button>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
