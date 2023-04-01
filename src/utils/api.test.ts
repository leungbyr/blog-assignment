import { setupServer } from "msw/node";
import { rest } from "msw";
import { getBlogPosts } from "./api";
import { AxiosError } from "axios";
import { handlers } from "@/mock/handler";
import testPosts from "@/mock/testPosts.json";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getBlogPosts", () => {
  it("returns post data", async () => {
    const res = await getBlogPosts(1);
    expect(res).toEqual(testPosts.slice(0, 5));
  });

  it("returns correct page", async () => {
    const res = await getBlogPosts(2);
    expect(res).toEqual(testPosts.slice(5, 10));
  });

  it("returns empty for nonexisting page", async () => {
    const res = await getBlogPosts(3);
    expect(res).toEqual([]);
  });
});
