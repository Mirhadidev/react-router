import { BrowserRouter, HashRouter, Link, MemoryRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostItems from "./components/PostItems";

export default function App(){
  return(
    <>
    {/* <MemoryRouter> */}
    <HashRouter>
    {/* <BrowserRouter> */}
    <div className="container bg-dark border rounded-bottom-3 border-top-0">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      {/* <a href="/">App Logo</a> */}
      <Link to={'/'} className="d-flex align-items-start mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
      <span className="fs-4">App Logo</span></Link>
      <ul className="nav nav-pills">
        
        <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'profile'}>Profile</Link></li>
        <li className="nav-item"><Link className="nav-link" to={'posts'}>Posts</Link></li>
      </ul>
    </header>
    </div>

    <Routes>
   
   <Route path="/" element={<Home/>}/>
   <Route path="posts" element={<Posts/>}/>
      <Route path="posts/cat" element={<Posts/>}/>
  <Route path="posts/:no" element={<PostItems/>}/>
   <Route path="profile" element={<Profile/>}/>
      <Route path="profile/:id" element={<Profile/>}/>


    </Routes>
    <div className="container-fluid bg-dark text-light py-5 fixed-bottom" >
     <footer>Footer</footer>
     <p className="fw-bold">From react router video</p>
     </div>
    {/* </BrowserRouter> */}
    </HashRouter>
    {/* </MemoryRouter> */}
    </>
  )
}