import Post from "./Post";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "@/utils/testUtils";

describe("Post", () => {
  it("renders title and description", () => {
    const post = {
      title: "test title",
      description: "test description",
      createdAt: "2021-05-20T01:13:07.861Z",
      updatedAt: "2021-09-17T04:11:19.105Z",
      id: "1",
      authors: [
        {
          createdAt: "2021-09-01T08:03:46.399Z",
          name: "Alison Ondricka",
          avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
          updatedAt: "2021-09-17T02:46:51.090Z",
          id: "1",
          postId: "1",
        },
        {
          createdAt: "2021-05-09T08:41:56.829Z",
          name: "Leigh Schuppe",
          avatar: "https://cdn.fakercloud.com/avatars/kuldarkalvik_128.jpg",
          updatedAt: "2021-09-16T21:18:15.506Z",
          id: "6",
          postId: "1",
        },
      ],
      comments: [
        {
          createdAt: "2021-03-04T23:50:32.618Z",
          title: "Qui quo non omnis tenetur.",
          description:
            "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
          updatedAt: "2021-09-17T02:24:07.859Z",
          id: "1",
          postId: "1",
        },
      ],
    };

    render(<Post post={post} />);

    const titleElement = screen.getByRole("heading");
    expect(titleElement).toHaveTextContent(post.title);

    expect(screen.getByText(post.description)).toBeInTheDocument();
  });

  it("shows comments when one or more", () => {
    const post = {
      title: "test title",
      description: "test description",
      createdAt: "2021-05-20T01:13:07.861Z",
      updatedAt: "2021-09-17T04:11:19.105Z",
      id: "1",
      authors: [
        {
          createdAt: "2021-09-01T08:03:46.399Z",
          name: "Alison Ondricka",
          avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
          updatedAt: "2021-09-17T02:46:51.090Z",
          id: "1",
          postId: "1",
        },
        {
          createdAt: "2021-05-09T08:41:56.829Z",
          name: "Leigh Schuppe",
          avatar: "https://cdn.fakercloud.com/avatars/kuldarkalvik_128.jpg",
          updatedAt: "2021-09-16T21:18:15.506Z",
          id: "6",
          postId: "1",
        },
      ],
      comments: [
        {
          createdAt: "2021-03-04T23:50:32.618Z",
          title: "Qui quo non omnis tenetur.",
          description:
            "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
          updatedAt: "2021-09-17T02:24:07.859Z",
          id: "1",
          postId: "1",
        },
      ],
    };

    render(<Post post={post} />);

    const commentsButton = screen.getByRole("button");
    expect(commentsButton).toHaveTextContent("Comments");
  });

  it("hides the comment button when there is no comments", () => {
    const post = {
      title: "test title",
      description: "test description",
      createdAt: "2021-05-20T01:13:07.861Z",
      updatedAt: "2021-09-17T04:11:19.105Z",
      id: "1",
      authors: [
        {
          createdAt: "2021-09-01T08:03:46.399Z",
          name: "Alison Ondricka",
          avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
          updatedAt: "2021-09-17T02:46:51.090Z",
          id: "1",
          postId: "1",
        },
        {
          createdAt: "2021-05-09T08:41:56.829Z",
          name: "Leigh Schuppe",
          avatar: "https://cdn.fakercloud.com/avatars/kuldarkalvik_128.jpg",
          updatedAt: "2021-09-16T21:18:15.506Z",
          id: "6",
          postId: "1",
        },
      ],
      comments: [],
    };

    render(<Post post={post} />);

    const commentsButton = screen.queryByRole("button");
    expect(commentsButton).not.toBeInTheDocument();
  });
});
