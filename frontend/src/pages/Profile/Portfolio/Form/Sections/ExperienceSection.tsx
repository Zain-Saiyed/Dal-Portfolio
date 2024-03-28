import { Box, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, InputField } from "components";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import { snakeCase } from "lodash";
import React, { Fragment, useEffect } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
};

const formConfig = {
  company_name: "",
  role: "",
  location: "",
  start_date: "",
  end_date: "",
  description: "",
};

const sectionId = "experience";

const ExperienceSection = ({ sectionValues, saveValues }: Props) => {
  const handleValidation = (values: any) => {};

  const [formValues, setFormValues] = React.useState<any>({
    [sectionId]: [formConfig],
  });

  useEffect(() => {
    if (!isEmpty(sectionValues)) {
      setFormValues({ [sectionId]: sectionValues });
    } else {
      setFormValues({ [sectionId]: [formConfig] });
    }
  }, [sectionValues]);

  return (
    <Formik
      initialValues={formValues}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setValues, errors, getFieldProps, handleSubmit }) => (
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
            <Form>
              <FieldArray name={sectionId}>
                {({ insert, remove, push, replace }) => (
                  <Fragment>
                    {values?.[sectionId]?.map((ins: any, index: number) => (
                      <Box key={index} sx={{ marginBottom: 3 }}>
                        <Grid
                          sx={{ width: "100%" }}
                          container
                          columns={{ xs: 1, sm: 1, md: 2, xl: 3 }}
                          columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 3 }}
                          rowSpacing={{ xs: 3, sm: 3, md: 3, xl: 3 }}
                        >
                          {[
                            {
                              id: `${sectionId}-company-name-${index}`,
                              name: `${sectionId}.${index}.company_name`,
                              label: "Company Name",
                              type: "text",
                              required: true,
                              value: ins?.company_name,
                              component: InputField,
                            },
                            {
                              id: `${sectionId}-role-${index}`,
                              name: `${sectionId}.${index}.role`,
                              label: "Role",
                              type: "text",
                              required: true,
                              value: ins?.role,
                              component: InputField,
                            },
                            {
                              id: `${sectionId}-location-${index}`,
                              name: `${sectionId}.${index}.location`,
                              label: "Location",
                              type: "text",
                              required: true,
                              value: ins?.university,
                              component: InputField,
                            },
                            {
                              id: `${sectionId}-start-date-${index}`,
                              name: `${sectionId}.${index}.start_date`,
                              label: "Start Date",
                              // required: true,
                              value: ins?.start_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `${sectionId}-end-date-${index}`,
                              name: `${sectionId}.${index}.end_date`,
                              label: "End Date",
                              // required: true,
                              value: ins?.end_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `${sectionId}-description-${index}`,
                              name: `${sectionId}.${index}.description`,
                              label: "Description",
                              type: "text",
                              required: true,
                              value: ins?.description,
                              component: InputField,
                            },
                          ].map((item: any, innerIndex: number) => {
                            const { component: Component, ...rest } = item;
                            return (
                              <Grid
                                item
                                xs={1}
                                md={1}
                                key={`input-item-${innerIndex}`}
                              >
                                <Component
                                  {...rest}
                                  // errorText={error}
                                  // isError={!!error}
                                  fullWidth
                                  {...getFieldProps(rest?.name)}
                                  {...(rest?.name?.includes("date") && {
                                    value: rest?.value?.["value"] || null,
                                    onChange: (value: any, context: any) =>
                                      replace(index, {
                                        ...ins,
                                        [snakeCase(rest?.label)]: {
                                          value: value,
                                          context: context,
                                        },
                                      }),
                                  })}
                                />
                                <ErrorMessage name={rest?.name} />
                              </Grid>
                            );
                          })}
                        </Grid>
                        <Button
                          sx={{ marginTop: 3 }}
                          label="Remove"
                          onClick={() => remove(index)}
                        />
                      </Box>
                    ))}
                    <Button
                      sx={{ float: "right" }}
                      label="Add Experience"
                      onClick={() => push(formConfig)}
                    />
                  </Fragment>
                )}
              </FieldArray>
            </Form>
          </Box>
          <Box
            sx={{
              height: "8%",
              paddingTop: 1,
              textAlign: "right",
              // borderTop: "1px solid",
            }}
          >
            <Button onClick={() => saveValues(values?.[sectionId])}>
              Save
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default ExperienceSection;
