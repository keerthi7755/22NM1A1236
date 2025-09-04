import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Stack } from "@mui/material";

export default function UrlForm({ urls, setUrls }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originalUrl) return;

    if (urls.length >= 5) {
      alert("Limit reached (max 5 URLs). Delete some to add new.");
      return;
    }

    let code = customCode || uuidv4().slice(0, 6);

    if (urls.find((u) => u.code === code)) {
      alert("Shortcode already taken!");
      return;
    }

    const newUrl = {
      id: uuidv4(),
      originalUrl,
      code,
      createdAt: Date.now(),
      validUntil: Date.now() + 30 * 60 * 1000, // 30 minutes
      clicks: [],
    };

    setUrls([newUrl, ...urls]);
    setOriginalUrl("");
    setCustomCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row" sx={{ marginY: 2 }}>
        <TextField
          label="Original URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          fullWidth
        />
        <TextField
          label="Custom Shortcode"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Shorten
        </Button>
      </Stack>
    </form>
  );
}
