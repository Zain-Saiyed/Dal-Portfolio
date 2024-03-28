import { Box, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, InputField, SelectField } from "components";
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
  title: "",
  description: "",
  start_date: "",
  end_date: "",
  status: "",
  project_url: "",
  // images: [{ type: String }],
};

const sectionId = "projects";

const ProjectSection = ({ sectionValues, saveValues }: Props) => {
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
                              id: `${sectionId}-title-${index}`,
                              name: `${sectionId}.${index}.title`,
                              label: "Title",
                              type: "text",
                              required: true,
                              value: ins?.title,
                              component: InputField,
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
                            {
                              id: `${sectionId}-status-${index}`,
                              name: `${sectionId}.${index}.status`,
                              label: "Status",
                              type: "text",
                              options: [
                                { label: "Completed", value: "completed" },
                                { label: "In Progress", value: "in_progress" },
                              ],
                              required: true,
                              value: ins?.status,
                              component: SelectField,
                            },
                            {
                              id: `${sectionId}-project-url-${index}`,
                              name: `${sectionId}.${index}.project_url`,
                              label: "Project Link",
                              type: "text",
                              value: ins?.project_url,
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
                      label="Add Project"
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
            <Button onClick={() => saveValues(values?.[sectionId])}>Save</Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default ProjectSection;
