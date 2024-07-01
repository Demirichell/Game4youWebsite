import React, { useState, useContext, useEffect} from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import FadeLoader from "react-spinners/FadeLoader";
import { AuthContext } from "../AppContext/AppContext";
import { auth, onAuthStateChanged} from "../firebase/firebase";

const Register = () => {
    const[loading, setLoading] = useState(false);
    const { registerWithEmailAndPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      setLoading(true);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/");
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    }, [navigate]);

    let initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().
        required('Required')
        .min("2", "Name must be at least 2 characters")
        .max("24", "Name must be 24 characters or less"),
        email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max("64", "Password must be 64 characters or less"),
        password: Yup.string()
        .required("Required")
        .min("8", "Password must be at least 8 characters")
    });

    const handleRegister = (e) => {
        e.preventDefault();
        const { name, email, password } = formik.values;
        if (formik.isValid === true){
            registerWithEmailAndPassword(name, email, password);
            setLoading(true);
        } else {
            setLoading(false);
            alert("Invalid input");
        }
     
    }

    const formik = useFormik({initialValues, validationSchema, handleRegister});

    return (
    <>
    {loading ? (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
            <FadeLoader color="#3763ff" />
        </div> ) : (
            <div className="grid grid-cols-1 justify-items-center items-center h-screen">
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
            <form onSubmit={handleRegister}>
                <div className="mb-2">
                    <Input name="name" type="text" label="Name" size="lg" {...formik.getFieldProps("name")} />
                </div>
                    {formik.touched.name && formik.errors.name && (
                        <Typography variant="small" color="red">
                            {formik.errors.name}
                        </Typography>
                    )}            
                <div className="mt-4 mb-2">
                    <Input name="email" type="email" label="Email" size="lg" {...formik.getFieldProps("email")} />
                </div>
                {   formik.touched.email && formik.errors.email && (
                        <Typography variant="small" color="red">
                            {formik.errors.email}
                        </Typography>
                    )}
                <div className="mt-4 mb-2">
                    <Input name="password" type="password" label="Password" size="lg" {...formik.getFieldProps("password")} />
                </div>
                    {formik.touched.password && formik.errors.password && (
                        <Typography variant="small" color="red">
                            {formik.errors.password}
                        </Typography>
                    )}
                <Button color="blue" variant="gradient" fullWidth type="submit" className="mb-4">
                    Register
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
        )}
    
    </>
    )
}

export default Register;