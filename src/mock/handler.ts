import { rest } from "msw";
import testPosts from "./testPosts.json";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts`,
    (req, res, ctx) => {
      const page = req.url.searchParams.get("page");
      if (page == null || page == "1") {
        return res(ctx.json(testPosts.slice(0, 5)));
      } else if (page == "2") {
        return res(ctx.json(testPosts.slice(5, 10)));
      } else {
        return res(ctx.json([]));
      }
    }
  ),
];
