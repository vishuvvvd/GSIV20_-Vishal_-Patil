import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    root: {
      // maxWidth: 300,
      margin: "10px 0",
      minHeight:332
    },
    media: {
      height: 200
    },
    title:{
        width: 140,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    maxLines:{
      display: "block",
      textOverflow: "ellipsis",
      wordWrap: "break-word",
      overflow: "hidden",
      maxHeight: "3.6em",
      lineHeight: "1.8em"
    }
  });