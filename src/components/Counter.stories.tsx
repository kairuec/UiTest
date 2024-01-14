import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta = {
  title: "Counter",
  component: Counter,
  argTypes: {
    label: {
      options: ["Primaryボタン", "Normalボタン"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {},
};
