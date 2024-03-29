import {
  Box,
  Grid,
  Stack,
  Avatar,
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

// import { useToast } from "hooks";
import { InputField, SelectField } from "components";
import { isEmail, isEmpty } from "utils/helpers";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { POST } from "utils/axios";

interface Props {
  user: any;
  isOpen: boolean;
  onSave: Function;
  handleClose: () => void;
}

const UserEditModal: FC<Props> = ({
  isOpen,
  handleClose,
  onSave,
  user,
}: Props) => {
  // const { showSuccess } = useToast();
  const [instance, setInstance] = useState<any>(null);

  const handleValidation = (values: any) => {
    const errors: any = {};
    if (isEmpty(values.first_name)) {
      errors.first_name = "Required";
    }
    if (isEmpty(values.last_name)) {
      errors.last_name = "Required";
    }
    if (isEmpty(values.username)) {
      errors.username = "Required";
    }
    if (isEmpty(values.email)) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    if (isEmpty(values.gender)) {
      errors.gender = "Required";
    }

    if (values.dob?.context?.validationError) {
      errors.dob = "Invalid Date of Birth";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      gender: "",
      dob: "",
    },
    validate: handleValidation,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  useEffect(() => {
    setInstance(user);
    formik.setValues({
      first_name: instance?.profile?.first_name,
      last_name: instance?.profile?.last_name,
      username: instance?.username,
      email: instance?.email,
      gender: instance?.profile?.gender,
      dob: instance?.profile?.dob || "",
    });

  }, [user, formik, instance]);

  // const prepareInitialValues = () => {
  //   formik.setValues({
  //     first_name: instance?.profile?.first_name,
  //     last_name: instance?.profile?.last_name,
  //     username: instance?.username,
  //     email: instance?.email,
  //     gender: instance?.profile?.gender,
  //     dob: instance?.profile?.dob || "",
  //   });
  // };

  const handleSave = (values: any) => {
    const payload: any = {
      username: values.username,
      email: values.email,
      profile: {
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        dob: values?.dob?.value,
      },
    };
    POST(`/api/profile/user/${instance?._id}/update`, payload)
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        onSave();
        handleClose();
      });
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true} scroll="paper">
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography component={"h1"} variant="h6">
              Edit Profile
            </Typography>
            <Avatar
              sx={{
                width: "70px",
                height: "70px",
              }}
            />
          </Stack>
          <Box
            sx={{
              width: "100%",
              marginTop: 3,
            }}
          >
            <Grid
              container
              columns={{ xs: 1, sm: 2, md: 2, xl: 2 }}
              columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 2 }}
              rowSpacing={{ xs: 3, sm: 2, md: 3, xl: 3 }}
            >
              {[
                {
                  label: "First Name",
                  id: "user-first-name",
                  name: "first_name",
                  type: "text",
                  required: true,
                  value: formik?.values?.first_name,
                },
                {
                  label: "Last Name",
                  id: "user-last-name",
                  name: "last_name",
                  type: "text",
                  required: true,
                  value: formik?.values?.last_name,
                },
                {
                  label: "Username",
                  id: "user-username",
                  name: "username",
                  type: "text",
                  required: true,
                  value: formik?.values?.username,
                },
                {
                  label: "Email",
                  id: "user-email",
                  name: "email",
                  type: "email",
                  required: true,
                  value: formik?.values?.email,
                },
              ].map((input: any, index: number) => {
                const error: any =
                  formik?.errors?.[input?.name as keyof typeof formik.errors] ||
                  "";
                return (
                  <Grid item xs={1} md={1} key={`input-item-${index}`}>
                    <InputField
                      {...input}
                      errorText={error}
                      isError={!!error}
                      {...formik?.getFieldProps(input?.name)}
                    />
                  </Grid>
                );
              })}

              <Grid item xs={1} md={1}>
                <SelectField
                  variant="filled"
                  id="user-gender"
                  label="Gender"
                  name="gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                  ]}
                  value={formik?.values?.gender}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={1} md={1}>
                <DatePicker
                  disableFuture
                  sx={{ width: "100%" }}
                  label="Date of Birth"
                  {...formik.getFieldProps("dob")}
                  slotProps={{ textField: { helperText: formik?.errors?.dob } }}
                  value={
                    formik?.values?.dob?.[
                      "value" as keyof typeof formik.values.dob
                    ] || null
                  }
                  onChange={(value, context) => {
                    formik.setValues((prevState: any) => ({
                      ...prevState,
                      dob: { value, context },
                    }));
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: 3 }}>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserEditModal;
