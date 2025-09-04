import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RedirectHandler({ urls }) {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const found = urls.find((u) => u.code === shortcode);

    if (!found) {
      alert("Invalid shortcode!");
      navigate("/");
      return;
    }

    if (Date.now() > found.validUntil) {
      alert("This link has expired.");
      navigate("/");
      return;
    }

    // Log click
    found.clicks.push({
      time: Date.now(),
      userAgent: navigator.userAgent,
    });

    window.location.href = found.originalUrl;
  }, [shortcode, urls, navigate]);

  return null;
}
