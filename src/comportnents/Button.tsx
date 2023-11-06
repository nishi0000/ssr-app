import React from 'react';
import { FC } from "react";
import "./button.css";

type ButtonText = {
    children: String;
    onClick:Function;
  }

export const Button: FC<ButtonText> = ({children,onClick}) => {

    return (
        <button className="common-button" onClick={()=>onClick()}>{children}</button>
    )
}