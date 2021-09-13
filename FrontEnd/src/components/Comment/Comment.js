import { IconButton, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
/**
 * Here is comments components who a get data response to set up it
 * Only comment user or admin can get the possibility to remove a comment
 */
function Comment({ author, content, userId }) {
  const {
    connexion: { user },
  } = useContext(AuthContext);
  return (
    <Typography paragraph className="comment">
      <span className="comment-content">
        <span className="comment-provider">{author} : </span>
        {content}
      </span>

      {user.userId === userId || !!user.isAdmin === true ? (
        <IconButton aria-label="settings" className="settings-comment-button">
          <MoreHorizIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </Typography>
  );
}

export default Comment;
