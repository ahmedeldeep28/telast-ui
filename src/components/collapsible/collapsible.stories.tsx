import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from ".";
import { Button } from "../button";
import { Card, CardBody } from "../card";

const meta: Meta<typeof Collapsible> = {
  title: "Component/Collapsible",
  component: Collapsible,
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
      <Collapsible className="w-[550px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button>click me</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              architecto necessitatibus ratione, veniam dolorum vero repellat
              consequatur quae, labore at velit illo assumenda maiores officia
              laudantium hic. Est, tenetur!
            </CardBody>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
