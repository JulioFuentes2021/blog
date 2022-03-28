import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer 7d43944dfb33ae25de26f49eeaedf6`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.CMS_API_TOKEN);

  return (
    <ClientContext.Provider value={client}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  );
}

export default MyApp;
