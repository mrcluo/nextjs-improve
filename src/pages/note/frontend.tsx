import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./frontend.module.css";

type Item = {
  content: string;
  check: boolean;
};
type HomeProp = {
  data: Item[];
};

export default function Backend({ data }: HomeProp) {
  const route = useRouter();
  console.log("🚀 ~ Backend ~ route:", route.query);
  return (
    <div className={style.textred}>
      {data.map((item) => (
        <div>笔记页面 - 前端{item.content}</div>
      ))}
      <div>
        <button onClick={() => route.push("/note/backend")}>
          跳转到后端笔记页面
        </button>
      </div>
      <div>
        <button onClick={() => route.push("/note/backend")}>
          <Link href="/note/backend">跳转到后端笔记页面</Link>
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("🚀 ~ = ~ context:", context.query);
  const res = await fetch("http://localhost:3000/data.json");
  const data: Item[] = await res.json();
  return {
    props: {
      data,
    },
  };
};
