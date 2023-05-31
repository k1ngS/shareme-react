import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";
import { client } from "../client";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const responseMessage = async (response: any) => {
    const decoded: { name: string; picture: string; sub: string } = jwt_decode(
      response.credential
    );

    localStorage.setItem("user", JSON.stringify(decoded));

    const { name, picture, sub } = decoded;

    console.log(name, picture, sub);

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  const errorMessage = () => {
    console.log("Login Failed");
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          typeof="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
