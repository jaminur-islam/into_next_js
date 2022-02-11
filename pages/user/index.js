import { useRouter } from "next/router";
import styling from "../../styles/single.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { myData: data },
  };
};

const Index = ({ myData }) => {
  const router = useRouter();
  const Goroute = (id) => {
    router.push(`/user/${id}`);
  };

  return (
    <div>
      {myData.map((dat) => (
        <h1
          onClick={() => Goroute(dat.id)}
          className={`text-2xl py-2 m-2 ${styling.single}`}
          key={dat.id}
        >
          {dat.name}
        </h1>
      ))}
    </div>
  );
};

export default Index;
