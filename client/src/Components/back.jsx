import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  return (
    <>
      <ArrowBackIosIcon
        sx={{ fontSize: 30, color: "#fff" }}
        onClick={() => navigate("/home")}
      />
    </>
  );
}
