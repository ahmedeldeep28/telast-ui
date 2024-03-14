import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardBody, CardFooter, CardHeader, CardText } from ".";

const meta: Meta<typeof Card> = {
  title: "Component/Card",
  component: Card,
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
      <Card>
        <CardHeader>
          <CardText>card title</CardText>
        </CardHeader>
        <CardBody className="border-y">
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, velit
            earum libero, necessitatibus iste ducimus fugit beatae quam minus
            quibusdam quod molestias sint quos, cupiditate similique porro
            reprehenderit quo explicabo.
          </CardText>
        </CardBody>
        <CardFooter>
          <CardText>card footer</CardText>
        </CardFooter>
      </Card>
    );
  },
};
