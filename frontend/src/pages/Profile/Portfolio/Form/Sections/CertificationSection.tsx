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
  title: "",
  issuer: "",
  issue_date: "",
  expiry_date: "",
  verification_link: "",
};

const sectionId = "certifications";

const CertificationSection = ({ sectionValues, saveValues }: Props) => {
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
                              id: `${sectionId}-issuer-${index}`,
                              name: `${sectionId}.${index}.issuer`,
                              label: "Issuer",
                              type: "text",
                              required: true,
                              value: ins?.issuer,
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
                              id: `${sectionId}-issue-date-${index}`,
                              name: `${sectionId}.${index}.issue_date`,
                              label: "Issue Date",
                              // required: true,
                              value: ins?.issue_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `${sectionId}-expiry-date-${index}`,
                              name: `${sectionId}.${index}.expiry_date`,
                              label: "Expiry Date",
                              // required: true,
                              value: ins?.expiry_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `${sectionId}-verification-link-${index}`,
                              name: `${sectionId}.${index}.verification_link`,
                              label: "Verification Url",
                              type: "text",
                              required: true,
                              value: ins?.verification_link,
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
                      label="Add Certification"
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

export default CertificationSection;
