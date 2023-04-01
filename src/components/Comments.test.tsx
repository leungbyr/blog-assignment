import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "@/utils/testUtils";
import Comments from "./Comments";

describe("Comments", () => {
  it("renders the number of comments", () => {
    const comments = [
      {
        createdAt: "2021-03-04T23:50:32.618Z",
        title: "Qui quo non omnis tenetur.",
        description:
          "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
        updatedAt: "2021-09-17T02:24:07.859Z",
        id: "1",
        postId: "1",
      },
    ];

    render(<Comments comments={comments} />);

    const commentsButton = screen.getByRole("button");

    expect(commentsButton).toHaveTextContent(comments.length.toString());
  });

  it("shows comment when clicked", () => {
    const comments = [
      {
        createdAt: "2021-03-04T23:50:32.618Z",
        title: "Qui quo non omnis tenetur.",
        description:
          "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
        updatedAt: "2021-09-17T02:24:07.859Z",
        id: "1",
        postId: "1",
      },
    ];

    render(<Comments comments={comments} />);

    const commentsButton = screen.getByRole("button");

    fireEvent.click(commentsButton);

    expect(screen.getByText(comments[0].description)).toBeVisible();
  });

  it("renders the correct number of comments when clicked", () => {
    const comments = [
      {
        createdAt: "2021-03-04T23:50:32.618Z",
        title: "Qui quo non omnis tenetur.",
        description:
          "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
        updatedAt: "2021-09-17T02:24:07.859Z",
        id: "1",
        postId: "1",
      },
    ];

    render(<Comments comments={comments} />);

    const commentsButton = screen.getByRole("button");

    fireEvent.click(commentsButton);

    const commentElements = screen.queryAllByRole("comment");
    expect(commentElements.length).toBe(comments.length);
  });
});
