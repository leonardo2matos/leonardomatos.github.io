import React from "react";
import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Planet } from "react-planet";
import { IconType } from "react-icons";
import Image from "next/image";

export interface PlanetItem {
  icon: IconType | string;
  alt?: string;
  className?: string;
  title: string;
  link: string;
  color?: string;
 
  
}

export interface CustomPlanetProps {
  label: string;
  items: PlanetItem[];
  
}

const CustomPlanet: React.FC<CustomPlanetProps> = ({
  label,
  items,
 
 
  
}: CustomPlanetProps) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  const getOrbitRadius = () => {
    if (isXs) return 90;
    if (isSm) return 100;
    if (isMd) return 130;
    if (isLg) return 170;
    return 180;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "10em", sm: "14em", md: "15em", lg: "16em" },
        textAlign: "center",
        marginTop: { xs: "-5em", sm: "-5em", md: "-6em", lg: "-1em" },
        marginLeft: { xs: "-5em", sm: "-8em", md: "-9em", lg: "-10em" },
        marginBottom: { xs: 8, sm: 8, md: 12, lg: 14 }, // Adiciona espaçamento inferior
      }}
    >
      <Planet
        centerContent={
          <Tooltip title="Click aqui para saber mais">
            <Box
              sx={{
                width: { xs: "6em", sm: "8em", md: "10em", lg: "11em" },
                height: { xs: "6em", sm: "8em", md: "10em", lg: "11em" },
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow:
                  "0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 5px 1px #d64eff",
                "&:hover": {
                  transform: "scale(1.0)",
                  border: "1px solid #f3eaff",
                  boxShadow:
                    "0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 7px 0 #9013fe, inset 0 0 5px 1px #d64eff",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "1.2em",
                    sm: "1.5em",
                    md: "1.9em",
                    lg: "2.2em",
                  },
                }}
              >
                {label}
              </Typography>
            </Box>
          </Tooltip>
        }
        open={false}
        tension={500}
        friction={19}
        autoClose
        orbitRadius={getOrbitRadius()}
        hideOrbit
        rotation={90}
        dragablePlanet
        dragRadiusPlanet={20}
        bounceOnClose
        bounce
      >
        {items.map((item, index) => {
          const IconComponent =
            typeof item.icon === "string" ? Image : item.icon;
          return (
            <Tooltip title={item.title} key={index}>
              <Box
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "4em", sm: "5em", md: "6em", lg: "6em" },
                  height: { xs: "4em", sm: "5em", md: "6em", lg: "6em" },
                  borderRadius: "50%",
                  margin: { xs: "0.3em", sm: "0.7em", md: "0.9em", lg: "1em" },
                  padding: "0.5em",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                  "& svg": {
                    fontSize: {
                      xs: "2.5em",
                      sm: "3em",
                      md: "4.5em",
                      lg: "3.0em",
                    },
                    color: item.color,
                    
                  },
                }}
                className={item.className}
              >
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={item.alt!}
                    layout="fill"
                    objectFit="cover" // Ajuste para preencher a área disponível mantendo a proporção
                    objectPosition="center" // Centraliza a imagem
                  />
                ) : ( 
                  <item.icon />
                )}
              </Box>
            </Tooltip>
          );
        })}
      </Planet>
    </Box>
  );
};

export default CustomPlanet;


