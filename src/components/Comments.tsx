import type { CommentData } from "@/types/types";
import {
  Accordion,
  List,
  ListItem,
  themeSpacing,
  themeColor,
} from "@amsterdam/asc-ui";
import styled from "styled-components";
import dayjs from "dayjs";

type CommentsProps = {
  comments: CommentData[];
};

const CommentsAccordion = styled(Accordion)`
  margin-top: ${themeSpacing(6)};
  padding: ${themeSpacing(1)};
`;

const CommentsList = styled(List)`
  margin: 0;
`;

const CommentListItem = styled(ListItem).attrs(() => ({ role: "comment" }))`
  display: flex;
`;

const CommentContent = styled.div`
  flex-grow: 1;
`;

const CommentDate = styled.div`
  width: 120px;
  color: ${themeColor("tint", "level5")};
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

const CommentItem = ({ comment }: { comment: CommentData }) => (
  <CommentListItem key={comment.id}>
    <CommentContent>{comment.description}</CommentContent>
    <CommentDate>
      {dayjs(comment.createdAt).format("MMM D, YYYY h:mm A")}
    </CommentDate>
  </CommentListItem>
);

const Comments = ({ comments }: CommentsProps) => {
  return (
    <CommentsAccordion title={`Comments (${comments.length})`}>
      <CommentsList>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </CommentsList>
    </CommentsAccordion>
  );
};

export default Comments;
