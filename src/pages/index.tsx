import { GetServerSideProps } from "next";

type Item = {
  content: string;
  check: boolean;
};
type HomeProp = {
  data: Item[];
};

export default function Home({ data }: HomeProp) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={item.check} onChange={() => {}} />
          {item.content}
        </div>
      ))}
    </div>
  );
}
/**
 *
 * nextjs node中间件做的事: nextjs的getServersideProps函数运行在服务端, 请求到数据后传入Home组件渲染模板
 * 最后中间件把有内容的html返回给客户端
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/data.json");
  const data: Item[] = await res.json();
  console.log("🚀 ~ Home ~ data:", res);
  return {
    props: {
      data,
    },
  };
};
