import { toast } from "react-toastify";

export const notifyRegisterError = (error) => toast.error(`${error.message}`);

export const notifyVerifyEmail = () => toast.success('Confirmation link has been sent to your email.');

export const notifyLoginSuccess = (data) => toast.success(`Wellcome, ${data.user.name}`)

export const notifyError = (error) => toast.error(`${error.message}`);

export const notifyBtnHeartReject = () => toast.info("To proceed please log in")

export const notifyBtnHeartSuccess = () => toast.success("Favorites changed successfully!")

