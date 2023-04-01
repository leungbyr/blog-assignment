import Posts from "./Posts";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "@/utils/testUtils";
import { setupServer } from "msw/node";
import { handlers } from "@/mock/handler";
import testPosts from "@/mock/testPosts.json";
import { rest } from "msw";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Posts", () => {
  it("displays loaded posts", async () => {
    render(<Posts />);

    expect(await screen.findByText(testPosts[0].title)).toBeInTheDocument();
  });

  it("handles pagination", async () => {
    render(<Posts />);

    const page2Button = screen.getByTestId("pageButton-2");
    fireEvent.click(page2Button);

    expect(await screen.findByText(testPosts[5].title)).toBeInTheDocument();
  });

  it("can't go past third page", async () => {
    render(<Posts />);

    const page3Button = screen.getByTestId("pageButton-3");
    fireEvent.click(page3Button);

    expect(screen.getByTestId("nextButton")).toBeDisabled();
  });

  it("stays empty when no posts", async () => {
    server.use(
      rest.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`,
        (req, res, ctx) => {
          return res(ctx.json([]));
        }
      )
    );

    render(<Posts />);

    const postElements = screen.queryAllByRole("article");
    expect(postElements.length).toBe(0);
  });
});
