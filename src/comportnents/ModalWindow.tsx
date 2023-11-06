import React from 'react';
import { FC } from "react";
import { Button } from "./Button";
import "./modalwindow.css";

type ModalProps = {
    children: String;
    onClick:Function;
  }

export const ModalWindow: FC<ModalProps>  = ({children,onClick}) => {

    return (
        <div className="modal-overlay">
        <div className="modal-content">
          <p>{children}</p>
          <Button onClick={onClick}>閉じる</Button>
        </div>
      </div>

    );


}