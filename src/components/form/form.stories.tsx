import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormControl, FormHelperText } from ".";
import { Label } from "../label";
import { Input } from "../input";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "../card";
import { Button } from "../button";

const meta: Meta<typeof FormControl> = {
  title: "Component/FormControl",
  component: FormControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <FormControl {...args}>
        <Label>Full Name</Label>
        <Input placeholder="enter full name" />
        <FormHelperText>Enter your full name in English</FormHelperText>
      </FormControl>
    );
  },
};

export const WithForm: Story = {
  render: (args) => {
    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Log in now</CardTitle>
          <CardText>Enter your email and your account password below</CardText>
        </CardHeader>
        <CardBody>
          <Form>
            <FormControl {...args}>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Enter Username" />
              <FormHelperText>
                Write the mail in this format "example@gmail.com"
              </FormHelperText>
            </FormControl>
            <FormControl {...args}>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </FormControl>
            <Button>submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  },
};
