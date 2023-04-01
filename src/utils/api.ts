import type { PostData } from "@/types/types";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getBlogPosts = async (page: number): Promise<PostData[]> => {
  const res = await client.get(
    `/api/v1/posts?sortBy=createdAt&order=desc&page=${page}&limit=5`
  );

  return res.data;
};

export default client;
