import { JSX, ReactNode } from "react";

export interface RoutesType {
  isRequiredPermission?: boolean;
  name: string;
  layout: string;
  component?: ReactNode;
  icon: JSX.Element | string;
  path: string;
  secondary?: boolean;
}
