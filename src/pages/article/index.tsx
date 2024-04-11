import { GetServerSideProps } from "next";

type Item = {
  content: string;
  check: boolean;
};
type HomeProp = {
  data: Item[];
};

export default function Article({ data }: HomeProp) {
  return <div>文章页面</div>;
}

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
