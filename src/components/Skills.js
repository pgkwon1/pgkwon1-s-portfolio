import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./css/Skills.module.css";
const frontEndSkills = [
  {
    name: "HTML5-CSS3-JS",
    fileName: "html5-css3-js.png",
  },
  {
    name: "Typescript",
    fileName: "typescript.svg",
  },
  {
    name: "React",
    fileName: "react.svg",
  },
  {
    name: "Next.JS",
    fileName: "nextjs.svg",
  },
];

const backEndSkills = [
  {
    name: "Node.js",
    fileName: "nodejs.svg",
  },
  {
    name: "Express.js",
    fileName: "express.svg",
  },
  {
    name: "PHP",
    fileName: "php.svg",
  },
  {
    name: "Laravel",
    fileName: "laravel.svg",
  },
];
const serverSkills = [
  {
    name: "AWS",
    fileName: "aws.svg",
  },

  {
    name: "Ubuntu",
    fileName: "ubuntu.svg",
  },
  {
    name: "CentOS",
    fileName: "centos.svg",
  },
];
const deploySkills = ["Github", "SVN", "Vercel"];

export default function Skills() {
  return (
    <Box
      className="skills"
      sx={{ display: "flex", backgroundColor: "#2AD5FF", height: "auto" }}
    >
      <Box
        sx={{
          padding: "4rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "8vw",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Skills
        </Typography>
        <Box className={styles.skillWrap}>
          <Stack className={styles.skillStack}>
            <Typography fontSize="3vw" align="center" color="black">
              Front
            </Typography>
            {frontEndSkills.map((front, index) => (
              <Box className={styles.logoWrap} key={index}>
                <img className={styles.logo} src={"/logos/" + front.fileName} />
              </Box>
            ))}
          </Stack>
          <Stack className={styles.skillStack}>
            <Typography fontSize="3vw" align="center" color="black">
              Back
            </Typography>

            {backEndSkills.map((back, index) => (
              <Box className={styles.logoWrap} key={index}>
                <img className={styles.logo} src={"/logos/" + back.fileName} />
              </Box>
            ))}
          </Stack>
          <Stack className={styles.skillStack}>
            <Typography fontSize="3vw" align="center" color="black">
              Server
            </Typography>

            {serverSkills.map((server, index) => (
              <Box className={styles.logoWrap} key={index}>
                <img
                  className={styles.logo}
                  src={"/logos/" + server.fileName}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
