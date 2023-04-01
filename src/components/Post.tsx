import type { PostData } from "@/types/types";
import {
  Card,
  CardContent,
  Heading,
  Paragraph,
  themeSpacing,
} from "@amsterdam/asc-ui";
import styled from "styled-components";
import dayjs from "dayjs";
import Comments from "./Comments";

type PostProps = {
  post: PostData;
};

const PostContainer = styled(Card).attrs(() => ({ role: "article" }))``;

const PostHeading = styled(Heading)`
  margin-bottom: ${themeSpacing(0)};
`;

const PostMetadata = styled.div`
  margin-top: ${themeSpacing(1)};
`;

const PostDate = styled(Paragraph)`
  margin-top: ${themeSpacing(1)};
`;

const PostContent = styled(Paragraph)`
  margin-top: ${themeSpacing(4)};
`;

const Post = ({ post }: PostProps) => {
  return (
    <PostContainer maxWidth={800}>
      <CardContent>
        <PostHeading>{post.title}</PostHeading>
        <PostMetadata>
          <Paragraph forwardedAs="h4">
            {post.authors.length > 0
              ? `By ${post.authors.map((author) => author.name).join(", ")}`
              : "Unknown author"}
          </Paragraph>
          <PostDate>
            {dayjs(post.createdAt).format("dddd, MMMM D, YYYY h:mm A")}
          </PostDate>
        </PostMetadata>
        <PostContent>{post.description}</PostContent>
        {post.comments.length > 0 ? (
          <Comments comments={post.comments} />
        ) : null}
      </CardContent>
    </PostContainer>
  );
};

export default Post;
