import { GetServerSideProps } from "next";

type Item = {
  content: string;
  check: boolean;
};
type HomeProp = {
  data: Item[];
};

export default function Backend({ data }: HomeProp) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.content}>笔记页面 - 后端{item.content}</div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/data.json");
  const data: Item[] = await res.json();
  return {
    props: {
      data,
    },
  };
};
