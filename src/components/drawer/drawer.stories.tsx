import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from ".";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
  title: "Component/Drawer",
  component: Drawer,
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
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button>Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              voluptate odio nobis rerum blanditiis architecto dicta, delectus
              error minima soluta temporibus accusantium perspiciatis voluptatum
              dolor, doloribus in vero. Officia, repellat?
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  },
};
