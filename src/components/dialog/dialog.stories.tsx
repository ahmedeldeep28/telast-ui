import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogBody,
  DialogClose,
} from ".";

import { Button } from "../button";

const meta: Meta<typeof Dialog> = {
  title: "Component/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default meta;

const Default: StoryObj<typeof Dialog> = {
  render: (args) => {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              voluptate odio nobis rerum blanditiis architecto dicta, delectus
              error minima soluta temporibus accusantium perspiciatis voluptatum
              dolor, doloribus in vero. Officia, repellat?
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="soft" color="danger">
                close
              </Button>
            </DialogClose>
            <Button>save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

const Dialog_Content: StoryObj<typeof DialogContent> = {
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
  },
  render: (args) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent size={args.size} rounded={args.rounded}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              voluptate odio nobis rerum blanditiis architecto dicta, delectus
              error minima soluta temporibus accusantium perspiciatis voluptatum
              dolor, doloribus in vero. Officia, repellat?
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="soft" color="danger">
                close
              </Button>
            </DialogClose>
            <Button>save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export { Default, Dialog_Content };
