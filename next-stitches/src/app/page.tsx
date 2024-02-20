"use client";
import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "$gray500",
  borderRadius: "9999px",
  border: "1px solid $transparent",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "$warn",
  },
  color: "$white",
});

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>Button</Button>
    </>
  );
}
