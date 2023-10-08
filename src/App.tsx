import myLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeProvider } from "@mui/material/styles";
import CSDNIcon from "/csdn.svg";
import WXIcon from "/wx.svg";
import theme from "./theme";
import { Grid } from "@mui/material";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <a href="https://mcxiaoxiao.github.io/orlosblog/" target="_blank">
          <img src={myLogo} className="logo" alt="Hole Logo" />
        </a>
      </div>

      <h3 className="subtitle">喜欢搭积木的狗勾先生子铭的coding小窝</h3>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          让我们开始吧!!!!00000000000!!11{count}
        </button>
      </div> */}
      <Grid container spacing={2}>
      <Grid item xs={12}>
      </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            href="https://blog.csdn.net/qq_36001281"
            startIcon={
              <img src={CSDNIcon} style={{ width: "20px" }} alt="CSDNIcon" />
            }
          >
            CSDN
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/mcxiaoxiao"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            startIcon={<EmailIcon />}
            variant="contained"
            color="primary"
            href="mailto:2665923759@qq.com"
          >
            Email
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            href="https://blog.csdn.net/qq_36001281"
            startIcon={
              <img src={WXIcon} style={{ width: "20px" }} alt="WXIcon" />
            }
          >
            Wechat
          </Button>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}

export default App;
