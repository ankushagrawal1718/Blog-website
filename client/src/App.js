import "./App.css";
// import Post from "./Post";
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import { UserContextProvider } from "./userContext";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { useState,useEffect } from "react";
import HashLoader from "react-spinners/ClipLoader";

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <div className="App">
      {
        loading?
        <HashLoader
        color={'#36d7b7'}
        loading={loading}
        // cssOverride={override}
        size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />:<UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path ="/edit/:id" element={<EditPost/>}/>
        </Route>
      </Routes>
     </UserContextProvider>
      }

    
     </div>
  );
}

export default App;
