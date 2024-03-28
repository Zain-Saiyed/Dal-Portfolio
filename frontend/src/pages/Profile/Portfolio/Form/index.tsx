import {
  Box,
  List,
  Stack,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Icon, SelectField } from "components";
import { useOnMobile } from "hooks";
import React, { Fragment } from "react";
import BioSection from "./Sections/BioSection";
import EducationSection from "./Sections/EducationSection";
import ExperienceSection from "./Sections/ExperienceSection";
import ProjectSection from "./Sections/ProjectSection";
import SkillSection from "./Sections/SkillSection";
import CertificationSection from "./Sections/CertificationSection";
import ConfigurationSection from "./Sections/ConfigurationSection";

type Props = {};

const sidebarWidth = "240px";

const sectionOrder = [
  {
    label: "Configuration",
    value: "Configuration",
    icon: "settings",
    key: "configuration",
    component: ConfigurationSection,
  },
  {
    label: "Bio",
    value: "Bio",
    icon: "bio",
    key: "bio",
    component: BioSection,
  },
  {
    label: "Education",
    value: "Education",
    icon: "education",
    key: "education",
    component: EducationSection,
  },
  {
    label: "Experience",
    value: "Experience",
    icon: "work",
    key: "experience",
    component: ExperienceSection,
  },
  {
    label: "Projects",
    value: "Projects",
    icon: "project",
    key: "projects",
    component: ProjectSection,
  },
  {
    label: "Skills",
    value: "Skills",
    icon: "skill",
    key: "skills",
    component: SkillSection,
  },
  {
    label: "Certifications",
    value: "Certifications",
    icon: "certification",
    key: "certifications",
    component: CertificationSection,
  },
];

const PortfolioForm = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState<string>("Configuration");
  const [formValues, setFormValues] = React.useState<any>({
    bio: {},
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
    achievements: [],
    social: [],
    theme: {},
  });

  const onMobile = useOnMobile();

  return (
    <Box sx={{ width: onMobile ? "100%" : "70%", margin: "auto", padding: 1 }}>
      <Stack
        sx={{
          justifyContent: "space-between",
          height: "calc(100vh - 100px)",
        }}
      >
        <Box sx={{ height: "6%" }}>
          <Typography variant="h6" component="h6">
            Create Portfolio
          </Typography>
        </Box>
        <Box sx={{ height: "94%", width: "100%" }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              ...(onMobile && {
                flexDirection: "column",
                justifyContent: "flex-start",
              }),
            }}
          >
            {onMobile ? (
              <Fragment>
                <SelectField
                  id="portfolio-sections-tabs"
                  label="Sections"
                  value={activeTab}
                  onChange={(e: any) => setActiveTab(e?.target?.value)}
                  options={sectionOrder}
                />
                <Divider sx={{ marginY: 1 }} />
              </Fragment>
            ) : (
              <Box
                sx={{ width: sidebarWidth }}
              >
                <List>
                  {sectionOrder.map((ins: any, index: number) => (
                    <ListItem
                      key={ins?.label}
                      disablePadding
                      sx={{
                        borderRight: "1px solid #e0e0e0",
                        ...(activeTab === ins?.value && {
                          borderTop: "1px solid #e0e0e0",
                          borderBottom: "1px solid #e0e0e0",
                          borderRight: "none !important",
                        }),
                      }}
                    >
                      <ListItemButton
                        selected={activeTab === ins?.value}
                        onClick={() => setActiveTab(ins?.value)}
                      >
                        <ListItemIcon>
                          <Icon name={ins?.icon} />
                        </ListItemIcon>
                        <ListItemText primary={ins?.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            <Box
              sx={{
                width: `calc(100% - ${sidebarWidth})`,
                overflowY: "scroll",
                paddingY: 1,
                paddingLeft: 3,
                marginTop: 1,
                ...(onMobile && {
                  width: "100%",
                  height: "100%",
                  paddingX: 0,
                }),
              }}
            >
              {sectionOrder.map((ins: any, index: number) => {
                const { component: Component } = ins;
                if (activeTab === ins?.value) {
                  return (
                    <Component
                      key={ins?.key}
                      sectionId={ins?.key}
                      sectionValues={formValues?.[ins?.key]}
                      saveValues={(values: any) =>
                        setFormValues((prevState: any) => ({
                          ...prevState,
                          [ins?.key]: values,
                        }))
                      }
                    />
                  );
                }
                return null;
              })}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PortfolioForm;
