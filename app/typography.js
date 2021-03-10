import React from "react"
import { Typography } from "@material-ui/core"

class TypographyClass extends React.Component {
  render() {
    return  (
      <React.StrictMode>
        <Typography variant="h1">텍스트</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography color="textSecondary">body1</Typography>
      </React.StrictMode>
    )
  }
}
export default TypographyClass;