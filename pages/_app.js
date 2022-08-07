import Layout from "../components/layout";
import "../styles/global.scss";
import "../styles/askQuestion.scss";
import "../styles/form.scss";
import "../styles/friendsAndFamily.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
