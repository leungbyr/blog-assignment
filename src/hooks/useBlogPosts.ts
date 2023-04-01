import type { PostData } from "@/types/types";
import { UseQueryResult, useQuery } from "react-query";
import { getBlogPosts } from "@/utils/api";

const useBlogPosts = (page: number): UseQueryResult<PostData[]> => {
  return useQuery<PostData[]>({
    queryKey: ["posts", page],
    queryFn: () => getBlogPosts(page),
    keepPreviousData: true,
  });
};

export default useBlogPosts;
