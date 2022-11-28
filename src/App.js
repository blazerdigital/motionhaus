import Navbar from "./component/Navbar/Navbar";
import { Body } from "./App.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleVideo from "./pages/SingleVideo";

function App() {
  const data = [
    {
      video: "/videos/first.mp4",
      poster: "/images/poster.jpg",
      title: "Life Blood #1",
      hoverText: "First Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #1",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #1",
    },
    {
      video: "/videos/second.mp4",
      title: "Life Blood #2",
      hoverText: "Second Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #2",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #2",
    },

    {
      video: "/videos/first.mp4",
      title: "Life Blood #3",
      hoverText: "Third Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #3",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #3",
    },

    {
      video: "/videos/second.mp4",
      title: "Life Blood #4",
      hoverText: "Forth Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #4",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #4",
    },

    {
      video: "/videos/first.mp4",
      title: "Life Blood #5",
      hoverText: "Fifth Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #5",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #5",
    },

    {
      video: "/videos/second.mp4",
      title: "Life Blood #6",
      hoverText: "Sixth Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #6",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #6",
    },

    {
      video: "/videos/first.mp4",
      title: "Life Blood #7",
      hoverText: "Seventh Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #7",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #7",
    },
    {
      video: "/videos/second.mp4",
      title: "Life Blood #8",
      hoverText: "Eighth Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #8",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #8",
    },

    {
      video: "/videos/first.mp4",
      title: "Life Blood #1",
      hoverText: "Nineth Video",
      firstInfo:
        "This is a CG sequence created for the brand film of Atlas Society, a non-profit organization advocating the idea of liberty. #9",
      secondInfo:
        "DIRECTION, VFX, LOOK DEVELOPMENT, ART DIRECTION, SET DRESSING #9",
    },
  ];
  return (
    <Body color="#222629">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} />}></Route>
          <Route path="/:id" element={<SingleVideo data={data} />}></Route>
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

export default App;
