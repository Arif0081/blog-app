import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./CreatePost";
import PostPage from "./PostPage";

function App() {
  return (
    <>
      {/* <main>
        <Header></Header>
      </main>
      <Post></Post>
      <Post></Post>
      <Post></Post> */}
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<IndexPage></IndexPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route
              path="/register"
              element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="/create" element={<CreatePost></CreatePost>}></Route>
            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
