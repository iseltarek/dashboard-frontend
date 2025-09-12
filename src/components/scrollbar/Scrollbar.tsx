import { Box } from "@chakra-ui/react";
import "./Scrollbar.css";
import { HTMLProps } from "react";

export const renderTrack = (props: HTMLProps<HTMLDivElement>) => {
  return <div className="scrollbar-track" {...props} />;
};

export const renderThumb = (props: HTMLProps<HTMLDivElement>) => {
  return <div className="scrollbar-thumb" {...props} />;
};

export const renderView = () => {
  return <Box className="scrollbar-view" height="100%" me={{ base: "0px !important", lg: "-16px !important" }} />;
};
