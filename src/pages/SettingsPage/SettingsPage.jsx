import { useState } from "react";
import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Avatar from "../../shared/components/Avatar/Avatar";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AvatarImg,
  AddButton,
  IconPlus,
  IconWrapper,
  BtnEyeStyled,
  ErrorsStyled,
  InputPasswWrapStyled,
  InputStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  SettingForm,
  AvatarWrapper,
} from "../SettingsPage/SettingsPageStyled";
import {
  PageWrapper,
  SectionWrapper,
  TitleWrapper,
} from "./SettingsPageStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";
import BtnConfirmSettings from "../../shared/components/Buttons/BtnConfirmSettings";
import { updateUserThunk } from "../../redux/user/userThunks";
import { notifyError } from "../../shared/NotificationToastify/Toasts";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const infoUser = useSelector(selectUser);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: infoUser && infoUser.name ? infoUser.name : "",
      // email: "",
      // password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "The name must consist of at least 3 characters")
        .required("Name is required"),
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Email address is required"),
      // password: Yup.string()
      //   .min(6, "Enter at least 6 characters")
      //   .max(20, "Must be maximum 20 characters")
      //   .required("Password is required"),
    }),

    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      if (selectedFile) {
        formData.append("avatar", selectedFile);
      }
      dispatch(updateUserThunk(formData)).catch((error) => {
        notifyError(error);
      });
      console.log(values);
    },
  });

  return (
    <>
      <PageWrapper>
        <SectionWrapper>
          <TitleWrapper>
            <GoBackBtn to="/" />
            <PageTitle>Settings</PageTitle>
          </TitleWrapper>
          <SettingForm>
            <AvatarWrapper>
              {avatarPreview || infoUser.userAvatar ? (
                <Avatar
                  size="large"
                  src={avatarPreview || infoUser.userAvatar}
                  alt="Photo"
                  width="100px"
                />
              ) : (
                <AvatarImg>
                  {infoUser && infoUser.name
                    ? infoUser.name.trim().charAt(0).toUpperCase()
                    : ""}
                </AvatarImg>
              )}
              <AddButton type="submit">
                <label htmlFor="avatar-upload">
                  <IconWrapper className="bi-wrapper">
                    <IconPlus className="bi-btn" />
                  </IconWrapper>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="avatar-upload"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </AddButton>
            </AvatarWrapper>
            <form onSubmit={formik.handleSubmit}>
              <InputsWrapper>
                <InputStyled
                  name="name"
                  type="name"
                  value={formik.values.name}
                  placeholder="Name"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  label="Name"
                />

                {formik.touched.name && formik.errors.name ? (
                  <ErrorsStyled>{formik.errors.name}</ErrorsStyled>
                ) : null}

                <InputStyled
                  name="email"
                  type="email"
                  value={infoUser.email}
                  placeholder="Email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  label="Email"
                />

                {formik.touched.email && formik.errors.email ? (
                  <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
                ) : null}

                <InputPasswWrapStyled>
                  <InputStyled
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    value={formik.values.password}
                    placeholder="Password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    label="Password"
                  />
                  <BtnEyeStyled
                    type="button"
                    onClick={togglePasswordShown}
                    name="togglePassword"
                    aria-label="Toggle password visibility"
                  >
                    {passwordShown ? (
                      <LuEyeStyled size={18} />
                    ) : (
                      <LuEyeOffStyled size={18} />
                    )}
                  </BtnEyeStyled>
                </InputPasswWrapStyled>

                {formik.touched.password && formik.errors.password ? (
                  <ErrorsStyled>{formik.errors.password}</ErrorsStyled>
                ) : null}
              </InputsWrapper>
              <BtnConfirmSettings type="submit">Save</BtnConfirmSettings>
            </form>
          </SettingForm>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};

export default SettingsPage;
