import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";

const meta: Meta<typeof AspectRatio> = {
  title: "Component/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-[300px] rounded overflow-hidden bg-accent">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </div>
    );
  },
};
