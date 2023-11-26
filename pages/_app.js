import Layout from "@/components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
  
    <Layout>
        <Component {...pageProps} />
   </Layout>
   
  );
}

// App.getLayout = function getLayout(app) {
//   return (
//       {app}
//   )
// }
