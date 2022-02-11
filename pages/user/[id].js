const Single = ({ singleId }) => {
  console.log(singleId);
  return (
    <div>
      <h1>{singleId.name} </h1>
    </div>
  );
};
export default Single;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((single) => {
    return {
      params: { id: single.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const singleId = await res.json();
  console.log(singleId);

  return {
    props: { singleId },
  };
};
