import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import CustomPlanet from "./CustomPlanet";
import { educations, experiences, stacks } from "./data";
import CardImage from "./CardImage";
import CarouselProjects from "./CarouselProjects";

const BasicGrid: React.FC = () => {
  const isXs = useMediaQuery("(max-width:700px)");

  return (
    <Container
      //maxWidth={isXs ? "sm" : "md"}
      sx={{
        mt: { xs: 15, sm: 20, md: 20, lg: 30 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <CardImage />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box>
            <Typography
              variant="body2"
              component="h2"
              sx={{
                textWrap: "nowrap",
                textAlign: "left",
                fontWeight: 700,
                fontSize: { xs: "2.7em", sm: "4em", md: "4.7em", lg: "4.8em" },
                letterSpacing: "-0.07em",
                background:
                  "linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: { xs: 0, sm: -25, md: -20, lg: -5 },
              }}
            >
              Hello World!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "1em", md: "1.2em", lg: "1.5em" },
                
              }}
            >
              Sou Leonardo Matos, Arquiteto e Urbanista em transição para a carreira
              de Desenvolvedor Front-End, atualmente atuando como Intern Front End Developer na
              Equantic Tech. Com uma sólida experiência em ferramentas como
              AutoCAD, Revit, SketchUp e no pacote Adobe, trago para o
              desenvolvimento web um olhar detalhista e uma abordagem criativa.
              Minhas habilidades em design e resolução de problemas, adquiridas
              na arquitetura, me permitem criar interfaces intuitivas e
              funcionais. Estou sempre em busca de novos desafios, combinando
              design e tecnologia para entregar soluções digitais impactantes.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 6, md: 7 }, mb: { xs: 8, md: 10 } }}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet label="STACKS" items={stacks} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet label="EDUCAÇÃO" items={educations} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <CustomPlanet label="EXPERIÊNCIA" items={experiences} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid
          sx={{
            mb: { xs: 10, sm: 20, md: 20 },
            ml: { md: "1em", lg: "2em" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <CarouselProjects />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicGrid;
