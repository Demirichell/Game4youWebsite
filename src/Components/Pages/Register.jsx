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

const Register = () => {
    let initialValues = {
        name: "",
        email: "",
        username: "",
        password: "",
    };

    const validationSchema = Yup.object({
        displayname: Yup.string().
        required('Required')
        .max("16"),
        email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max("64", "Password must be 64 characters or less"),
        username: Yup.string()
        .required('Required')
        .max("16"),
        password: Yup.string()
        .required("Required")
        .min("8", "Password must be at least 8 characters long")
    });

    const handleRegister = (e) => {
        const { displayname, email, username, password } = formik.values;
        e.preventDefault();
    }

    const formik = useFormik({initialValues, validationSchema, handleRegister});

    return <div className="grid grid-cols-1 justify-items-center items-center h-screen">
        <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Register
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <form onSubmit="">
            <div className="mb-2">
                <Input name="displayname" type="text" label="Display name" size="lg" />
            </div>
            <div className="mt-4 mb-2">
                <Input name="email" type="email" label="Email" size="lg" />
            </div>
            <div className="mt-4 mb-2">
                <Input name="username" type="text" label="Username" size="lg" />
            </div>
            <div className="mt-4 mb-2">
                <Input name="password" type="password" label="Password" size="lg" />
            </div>
            <Button color="blue" variant="gradient" fullWidth type="submit" className="mb-4">
                Sign In
            </Button>
        </form>
      </CardBody>
      <CardFooter className="pt-0">     
        <div className="mt-6 flex font-roboto text-base justify-center">
          Already have an account?
          <Link to="/login">
          <p className="ml-1 font-bold font-roboto text-base text-blue-500 text-center">
            Sign in
          </p>
          </Link>
        </div>
      </CardFooter>
    </Card>
    </div>
}

export default Register;