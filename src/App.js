import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import FormPage from "./pages/FormPage";
import RegisterPage from "./pages/RegisterPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [gifts,setGifts] = useState([]);
  useEffect(() =>{
    axios.get(process.env.REACT_APP_API_URL+'/gifts').then((response)=>setGifts(response.data)).catch((err)=>{console.log(err)});
    /*
    setGifts([
      {
          "sender": "ava_chen_sunshine",
          "receiver": "alex_volkov007",
          "title": "Ring",
          "description": "Received this beautiful gift from beautiful lady of mine",
          "image": "http://127.0.0.1:8000/media/gifts/ring.png"
      },
      {
          "sender": "alex_volkov007",
          "receiver": "ava_chen_sunshine",
          "title": "Bracelet",
          "description": "Received this special gift from my best friend on my birthday.",
          "image": "http://127.0.0.1:8000/media/gifts/bracelet.png"
      },
      {
          "sender": "emma_watson123",
          "receiver": "alex_volkov007",
          "title": "Books",
          "description": "A thoughtful gift of a book I always wanted.",
          "image": "http://127.0.0.1:8000/media/gifts/books.jfif"
      },
      {
          "sender": "john_doe2024",
          "receiver": "emma_watson123",
          "title": "Watch",
          "description": "A classic watch gifted by my best friend.",
          "image": "http://127.0.0.1:8000/media/gifts/watch.png"
      }
      
    ]);*/
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage gifts={gifts} />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
