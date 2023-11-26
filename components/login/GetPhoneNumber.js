import Image from "next/image";
import Link from "next/link";
import styles from "./GetPhoneNumber.module.scss";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
//import { POST } from "@/repository/AxiosRepository";
import { POST } from "@/repository/FetchApiRepository";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/slices/users/usersSlice";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ClimbingBoxLoader } from "react-spinners";

const GetPhoneNumber = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string().required("لطفا این قسمت را خالی نگذارید "),
    password: Yup.string().required("لطفا این قسمت را خالی نگذارید "),
  });
  const formFields = {
    username: "",
    password: "",
  };

  const submitHandler = (values) => {

    POST("/users/register", values).then((response)=>{
      return  response.json() 
    })
    .then((result) => {
      if (result.id !== 0) {
        POST("/users/login", values).then((response)=>{
          return  response.json()
        })
        .then((result) => {
          // dispatch(setToken(result.token);
          Cookies.set("token", JSON.stringify(result.token), {
            expires: 7,
            path: "/admin",
          });
          router.push("/");
        });
      } else {
        (error) => console.log(error.message);
      }
    });
  };

  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.logoContainer}`}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="لوگو دیجی کالا"
            width={150}
            height={40}
          />
        </Link>
      </div>
      <div className={`${styles.loginContainer}`}>
        <h2 className={`${styles.texth2}`}>ورود | ثبت نام</h2>
        <p className={`${styles.title}`}>!سلام </p>
        <p className={`${styles.textBody}`}>
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </p>
        <Formik
          onSubmit={submitHandler}
          initialValues={formFields}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <Form>
            <Field
              type="text"
              name="username"
              className={`${styles.mobileNumber}`}
              autoComplete="off"
            />
            <p className={`${styles.textBody}`}>
              لطفا رمز عبور خود را وارد کنید
            </p>
            <Field
              type="text"
              name="password"
              className={`${styles.mobileNumber}`}
              autoComplete="off"
            />
            <p className={`${styles.attentionText}`}>
              لطفا این قسمت را خالی نگذارید
            </p>
            <button className={`${styles.loginButton}`} type="submit">
              ورود
            </button>
          </Form>
        </Formik>
        <p className={`${styles.bottomAttention}`}>
          ورود شما به معنای پذیرش
          <Link className={`${styles.link}`} href={"#"}>
            شرایط فروشگاه
          </Link>
          و
          <Link className={`${styles.link}`} href={"#"}>
            قوانین حریم خصوصی
          </Link>
          است
        </p>
      </div>
    </div>
  );
};

export default GetPhoneNumber;
