import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import PostBody from "./PostBody";

describe("Post Body component", () => {
  let mockContent: string;

  beforeEach(async () => {
    mockContent = "## Hello World";
    render(await PostBody({ fileContent: mockContent }));
  });

  afterAll(() => {
    cleanup();
  });

  it("displays correct markdown content", () => {
    const heading = screen.getAllByText(/Hello World/i)[0];

    expect(heading).toBeInTheDocument();
  });

  it("header has correct id attribute from rehype-slug", () => {
    const heading = screen.getAllByText(/Hello World/i)[0];
    expect(heading).toHaveAttribute("id", "hello-world");
  });
});
