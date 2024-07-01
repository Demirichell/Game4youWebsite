import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import {useFormik} from "formik";
  import * as Yup from "yup";


const Login = () => {
    let initialValues = {
        email: "",
        password: "",
    };
 
    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max("64", "Password must be 64 characters or less"),
        password: Yup.string()
        .required("Required")
        .min("8", "Password must be at least 8 characters long")
        .max("64", "Password must be 64 characters or less"),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email,password } = formik.values;
        if(formik.isValid === true){
            alert("valid")
        } else {
            alert("Invalid input")
        }
        console.log("formik", formik);
    }
    const formik = useFormik({initialValues, validationSchema, handleSubmit});

    return (
        <div className="grid grid-cols-1 h-screen justify-items-center items-center">
        <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign in
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <Input name="email" type="email" label="Email" size="lg" {...formik.getFieldProps("email")}/>
                </div>
                {formik.touched.email && formik.errors.email &&(<Typography variant="small" color="red">{formik.errors.email}</Typography>)}
                <div className="mt-4 mb-2"> 
                    <Input name="password" type="password" label="Password" size="lg" {...formik.getFieldProps("password")}/> 
                </div>  
                {formik.touched.password && formik.errors.password &&(<Typography variant="small" color="red">{formik.errors.password}</Typography>)}       
                <Button variant="gradient" color="blue" fullWidth className="mb-4" type="submit">
                Sign in
                </Button>
            </form>              
          <Button variant="gradient" color="blue" fullWidth >
            Sign in with Google
          </Button>
          </CardBody>
          <CardFooter className="pt-0">
          <Link to="/reset">
          <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center">
            Reset password
            </p>
            </Link>
            <div className="mt-6 flex font-roboto text-base justify-center">
              <Link to="../register">
                <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center">
                    Register
                </p>
              </Link>
            </div>          
        </CardFooter>
      </Card>
      </div>
    );
}

export default Login;
