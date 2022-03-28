import { useQuery } from "graphql-hooks";

const POST_QUERY = `query Post {
  post {
    title
  }
}`;

const Graph = () => {
  const { data } = useQuery(POST_QUERY);
  console.log(data);

  return <div>Probando GraphQl</div>;
};

export default Graph;
