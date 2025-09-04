import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import Stats from "./components/Stats";
import RedirectHandler from "./components/RedirectHandler";
import { loadUrls, saveUrls } from "./utils/storage";

export default function App() {
  const [urls, setUrls] = useState(loadUrls());

  // Save whenever urls change
  useEffect(() => {
    saveUrls(urls);
  }, [urls]);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        URL Shortener
      </Typography>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <UrlForm urls={urls} setUrls={setUrls} />
              <UrlList urls={urls} />
              <Stats urls={urls} />
            </>
          }
        />
        <Route path="/:shortcode" element={<RedirectHandler urls={urls} />} />
      </Routes>
    </Container>
  );
}
