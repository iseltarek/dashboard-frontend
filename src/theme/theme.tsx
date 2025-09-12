import { HTMLChakraProps, SystemStyleObject } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/card";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { progressStyles } from "./components/progress";
import { sliderStyles } from "./components/slider";
import { textareaStyles } from "./components/textarea";
import { switchStyles } from "./components/switch";
import { linkStyles } from "./components/link";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
import { fontSizes } from "./additions/fontSizes";
export interface ThemingProps {
  variant?: string;
  size?: string;
  colorScheme?: string;
  orientation?: "horizontal" | "vertical";
  styleConfig?: SystemStyleObject;
}
export default extendTheme({ fontSizes, breakpoints }, globalStyles, badgeStyles, buttonStyles, linkStyles, progressStyles, sliderStyles, inputStyles, textareaStyles, switchStyles, CardComponent);

export type CustomCardProps = HTMLChakraProps<"div"> & ThemingProps;
