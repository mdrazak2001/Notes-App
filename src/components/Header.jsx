import React from "react";
import NotesIcon from "@material-ui/icons/Notes";

function Header() {
  return (
    <header style={{ textAlign: "center" }}>
      <h1>
        <NotesIcon /> Notes
      </h1>
    </header>
  );
}
// style={{ textAlign: "center" }}
export default Header;
