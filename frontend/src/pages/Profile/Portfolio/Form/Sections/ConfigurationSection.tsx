import { Box, Grid, Skeleton } from "@mui/material";
import { Button, InputField } from "components";
import { useOnMobile } from "hooks";
import { MuiColorInput } from "mui-color-input";
import React, { useEffect, useState } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
};

const formConfig = {
  name: "",
  color: "",
};

const sectionId = "configuration";

const ConfigurationSection = ({ sectionValues, saveValues }: Props) => {
  const onMobile = useOnMobile();
  const handleValidation = (values: any) => {};

  const [formValues, setFormValues] = useState<any>(formConfig);

  useEffect(() => {
    if (!isEmpty(sectionValues)) {
      setFormValues(sectionValues);
    } else {
      setFormValues(formConfig);
    }
  }, [sectionValues]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: "90%", overflowY: "scroll", paddingY: 1 }}>
        <Grid
          sx={{ width: "100%" }}
          container
          columns={{ xs: 1, sm: 1, md: 2, xl: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 3 }}
          rowSpacing={{ xs: 3, sm: 3, md: 3, xl: 3 }}
        >
          <Grid sx={{ width: "100%" }} item xs={1} md={1}>
            <InputField
              id="configuration-name"
              name="name"
              label="Portfolio Name"
              value={formValues?.name}
              onChange={(e: any) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </Grid>
          <Grid sx={{ width: "100%" }} item xs={1} md={1}>
            <MuiColorInput
              id="configuration-color"
              name="color"
              label="Theme color"
              fullWidth
              value={formValues?.color}
              onChange={(color: any) =>
                setFormValues({ ...formValues, color: color })
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              marginTop: 2,
              border: ".1px solid #e0e0e0",
              borderRadius: "10px",
              padding: 2,
              maxWidth: "300px",
              height: "200px",
              display: "flex",
              justifyContent: "space-between",
              ...(onMobile && {
                width: "100%",
                height: "200px",
              }),
            }}
          >
            <Skeleton
              sx={{
                width: "30%",
                height: "100%",
                background: formValues?.color,
              }}
              variant="rectangular"
              animation={false}
            />
            <Box
              sx={{
                width: "65%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Skeleton variant="rectangular" height={"13%"} />
              <Skeleton variant="rectangular" height={"13%"} />
              <Skeleton variant="rectangular" height={"13%"} />
              <Skeleton variant="rectangular" height={"13%"} />
              <Skeleton variant="rectangular" height={"13%"} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "8%",
          paddingTop: 1,
          textAlign: "right",
          // borderTop: "1px solid",
        }}
      >
        <Button onClick={() => saveValues(formValues)}>Save</Button>
      </Box>
    </Box>
  );
};

export default ConfigurationSection;
