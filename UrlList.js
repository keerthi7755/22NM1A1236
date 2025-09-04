import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

export default function UrlList({ urls }) {
  return (
    <List>
      {urls.map((url) => (
        <ListItem key={url.id} divider>
          <ListItemText
            primary={`/${url.code}`}
            secondary={`→ ${url.originalUrl}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
