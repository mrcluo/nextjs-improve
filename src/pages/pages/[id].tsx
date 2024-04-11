import { GetStaticProps, GetStaticPaths, NextPage } from "next";

type PostProps = {
  content: string;
};

const Page: NextPage<PostProps> = ({ content }: PostProps) => {
  return (
    <div>
      <div>{content}</div>
      {/* suppressHydrationWarning 解决服务器时间和客户端时间不一致的警告 */}
      <div suppressHydrationWarning>
        渲染时间: {new Date().toLocaleString()}
      </div>
      <div>
        npm run start后, network中可看到:
        每次页面刷新都会重新请求,返回的html中的渲染时间没变,
        说明是静态页面(只有30秒后才会重新生成html, 渲染时间才变)
      </div>
    </div>
  );
};

Page.displayName = "PostPage";

export default Page;

// 加getStaticPaths 是为了告诉SSG有几篇静态文章要生成.  SSR不用, 因为它每次都重新生成
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false, // 是否支持找不到的页面时返回404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params?.id) {
    const postID = +context.params?.id;
    const fs = await import("fs/promises");
    const data = await fs.readFile("public/posts.json");
    const posts = JSON.parse(data.toString()) as Array<{
      id: number;
      content: string;
    }>;
    const post = posts.find((i) => i.id == postID);
    return {
      props: {
        content: post?.content,
      },
      revalidate: 30, // 静态页面多久自动更新一次
    };
  }
  return {
    props: { content: "no this post" },
  };
};
