import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
} from ".";
import { Button } from "../button";
import { Divider } from "../divider";

const meta: Meta<typeof Dropdown> = {
  title: "Component/Dropdown",
  component: Dropdown,
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
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>My Account</DropdownLabel>
          <Divider className="my-1" />
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Billing</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Team</DropdownItem>
          <DropdownItem>Invite users</DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => {
    return (
      <Dropdown defaultOpen={true}>
        <DropdownTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>My Account</DropdownLabel>
          <Divider className="my-1" />
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Billing</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Team</DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const Checkboxes: StoryObj<typeof DropdownContent> = {
  render: (args) => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownTrigger>
        <DropdownContent {...args}>
          <DropdownLabel>Appearance</DropdownLabel>
          <Divider className="my-1" />
          <DropdownCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownCheckboxItem>
          <DropdownCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownCheckboxItem>
          <DropdownCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const Radios: StoryObj<typeof DropdownContent> = {
  render: (args) => {
    const [position, setPosition] = useState("bottom");
    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownTrigger>
        <DropdownContent {...args}>
          <DropdownLabel>Appearance</DropdownLabel>
          <Divider className="my-1" />
          <DropdownRadioGroup value={position} onValueChange={setPosition}>
            <DropdownRadioItem value="top">Top</DropdownRadioItem>
            <DropdownRadioItem value="bottom">Bottom</DropdownRadioItem>
            <DropdownRadioItem value="right">Right</DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const WithSubDropdown: StoryObj<typeof DropdownContent> = {
  render: (args) => {
    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownTrigger>
        <DropdownContent {...args}>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Billing</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Team</DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>Invite users</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>email</DropdownItem>
              <DropdownItem>phone</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
        </DropdownContent>
      </Dropdown>
    );
  },
};
