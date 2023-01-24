import { Grid, Paper, Typography } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/system";

const infos = [
  {
    name: "이름",
    value: "권혁진",
    icon: <AccessibilityIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "생년월일",
    value: "1996-08-22",
    icon: <CelebrationIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "이메일",
    value: "pgkwon1@gmail.com",
    icon: <EmailIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "연락처",
    value: "010-4756-8238",
    icon: <PhoneIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "주소지",
    value: "서울시 금천구",
    icon: <HomeIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "학력",
    value: "동서울대학교 컴퓨터소프트웨어학과 2학년 재학중",
    icon: <SchoolIcon sx={{ fontSize: "3rem" }} />,
  },
];
export default function Info() {
  return (
    <Box
      className="info"
      sx={{ padding: "4rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontWeight: 900,
        }}
      >
        <InfoIcon sx={{ fontSize: "2.8rem" }} />
        About Me
      </Typography>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {infos.map((info) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            sx={{ padding: "2rem", display: "flex", gap: "1rem" }}
          >
            <Box>{info.icon}</Box>
            <Box sx={{ fontSize: "1.3rem" }}>
              <Box>{info.name}</Box>
              <Box>{info.value}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
