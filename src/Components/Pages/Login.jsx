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

const Login = () => {
    return (
        <div className="grid grid-cols-1 h-screen justify-items-center items-center">
        <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="red"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign in
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
            <form onSubmit="">
                <div className="mb-2">
                    <Input label="Email" size="lg" />
                </div>
                <div className="mt-4 mb-2"> 
                    <Input label="Password" size="lg" /> 
                </div>         
                <Button variant="gradient" fullWidth className="mb-4" type="submit">
                Sign in
                </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth className="mb-4">
            Sign in with Google
          </Button>
          <Link>
          <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center">
            Reset password
            </p>
            </Link>
            <div className="mt-6 flex font-roboto text-base justify-center">
              <Link>
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
