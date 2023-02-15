import React, { useState, useEffect } from "react";
import "./Tooltip.css";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  value: string | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tooltip = ({ value, show, setShow }: Props) => {
  // after 5 secs tooltip disapppear
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [setShow]);

  return (
    <>
      <Box
        id="tooltip"
        className={`component ${show ? "show" : "hide"}`}
        transition="visibility 0s linear 5s"
        display="flex"
        alignItems="center"
      >
        <img
          className="svg"
          src="https://cdn-icons-png.flaticon.com/512/6897/6897039.png"
          alt="Tooltip Icon"
        />
        <Text fontSize="14px" color="tomato">
          {value}
        </Text>
      </Box>
    </>
  );
};

export default Tooltip;
