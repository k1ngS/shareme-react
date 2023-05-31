import jwt_decode from "jwt-decode";
import { client } from "../client";

import { useNavigate } from "react-router-dom";

export const responseMessage = async (response: any) => {
  const navigate = useNavigate();

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

export const errorMessage = (error) => {
  console.log(error);
};
