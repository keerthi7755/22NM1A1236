import React from "react";
import { Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

export default function Stats({ urls }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h6">Statistics</Typography>
      <Divider />
      <List>
        {urls.map((url) => (
          <ListItem key={url.id}>
            <ListItemText
              primary={`/${url.code} → ${url.originalUrl}`}
              secondary={`Clicks: ${url.clicks.length}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
