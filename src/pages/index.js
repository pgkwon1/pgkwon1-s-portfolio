import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Icon from "../public/icons/man.svg";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Info from "../components/Info";
import Skills from "../components/Skills";

export default function Home() {
  const BoxDefaultStyle = {
    width: "100%",
    maxWidth: "70rem",
    margin: "0 auto",
    fontSize: "1.6vw",
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "100px",
    color: "black",
    border: 0,
  }));
  return (
    <>
      <Box
        sx={{
          padding: "5rem",
          backgroundImage: "url('main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box sx={BoxDefaultStyle}>
          <Typography
            component="span"
            sx={{
              color: "white",
              fontWeight: "bold",
              backGroundcolor: "blue",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "2.1rem" }}>
              권혁진 포트폴리오
            </Typography>
            안녕하세요 발전하는 삶을 사랑하는 웹 개발자 권혁진입니다.
          </Typography>
        </Box>
      </Box>
      {/* Info */}
      <Info />
      <Skills />
    </>
  );
}
