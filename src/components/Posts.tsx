import { Fragment, useState } from "react";
import Post from "./Post";
import styled from "styled-components";
import { Divider, Pagination, themeSpacing } from "@amsterdam/asc-ui";
import useBlogPosts from "@/hooks/useBlogPosts";
import { PaginationProps } from "@amsterdam/asc-ui/lib/components/Pagination/Pagination";

const PostsContainer = styled.div`
  padding-top: ${themeSpacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostDivider = styled(Divider)`
  margin: 0 ${themeSpacing(4)};
  align-self: stretch;
`;

const PostsPagination = styled(Pagination)`
  margin: ${themeSpacing(2)} 0;
`;

const Posts = () => {
  const [page, setpage] = useState<number>(1);
  const { data } = useBlogPosts(page);

  const handlePageChange = (newPage: number) => {
    setpage(newPage);
  };

  return (
    <PostsContainer>
      {data?.map((postData) => (
        <Fragment key={postData.id}>
          <Post post={postData} />
          <PostDivider />
        </Fragment>
      ))}
      <PostsPagination
        page={page}
        pageSize={5}
        collectionSize={13}
        onPageChange={handlePageChange}
        labelNext="next"
        labelPrevious="previous"
      />
    </PostsContainer>
  );
};

export default Posts;
