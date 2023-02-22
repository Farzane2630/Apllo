import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
    
    function App() {
  const router = useRoutes(routes);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <Layout style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'row', backgroundColor: 'unset'}}>
    {router} 
  </Layout>
    </ApplicationProvider>
  );
}

export default App;
