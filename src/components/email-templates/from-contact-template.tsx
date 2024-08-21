import * as React from "react";

interface FromContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const FromContactTemplate: React.FC<
  Readonly<FromContactTemplateProps>
> = ({ name, email, message }) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{message}</p>
  </div>
);
