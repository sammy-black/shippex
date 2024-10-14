// types/declarations.d.ts
declare module "*.png" {
    const value: any;
    export default value;
  }
  
  declare module "*.jpg" {
    const value: any;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: any;
    export default value;
  }
  
  declare module "*.svg" {
    import React from "react";
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  
  declare module "*.webp" {
    const value: any;
    export default value;
  }
  
  declare module "*.ttf" {
    const value: any;
    export default value;
  }
  