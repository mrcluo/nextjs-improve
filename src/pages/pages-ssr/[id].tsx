import { GetServerSideProps } from "next";

type PostProps = {
  content: string;
};
type postItem = {
  content: string;
  id: number;
};

export default function Page({ content }: PostProps) {
  return (
    <div>
      <div>{content}</div>
      <div>渲染时间: {new Date().toLocaleString()}</div>
      <div>
        npm run start后, network中可看到:
        每次页面刷新都会重新请求,生成新html返回, 渲染时间变化
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params?.id) {
    const res = await fetch("http://localhost:3000/posts.json");
    const data: postItem[] = await res.json();
    const postID = +context.params?.id;
    const post = data.find((item) => item.id == postID);
    console.log("🚀 ~ Home ~ data:", post);
    return {
      props: {
        content: post?.content,
      },
    };
  }
  return {
    props: { content: "no this post" },
  };
};
