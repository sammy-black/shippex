import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

interface ShipmentIconProps {
  color?: string;
  size?: string | number;
}

const ShipmentIcon = ({ size, color }: ShipmentIconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ? size : 25}
    height={size ? size : 25}
    fill="none" 
  >
    <G fill={color || "#A7A3B3"} clipPath="url(#a)">
      <Path d="M16.147 13.668V4.354l-4.34-.578-.148 4.323-1.589-1.082-1.589.897.328-4.52-2.433-.312v9.477l9.771 1.109ZM20.316 24.27v-9.314l-4.34-.578-.148 4.323-1.589-1.082-1.589.897.328-4.52-2.25-.22v9.476l9.588 1.018ZM6.811 13.304l-.144 4.217-1.59-1.082-1.588.897.327-4.52-2.25-.31v9.477l8.289.942V13.64l-3.044-.337ZM20.81 11.987l-3.198 1.909 3.176.404 3.042-1.916-3.02-.397ZM21.191 15.043v9.005l3.428-2.045-.067-9.078-3.361 2.118ZM5.688 11.32v-.883l-3.393 1.491 1.947.248 1.446-.856ZM17.022 4.441v9.005l3.054-1.823.372-.315-.065-8.985-3.36 2.118ZM15.616 1.251 12.28 3.145l4.34.554 3.041-1.917-4.045-.53ZM9.236 2.755 12.471.836l-1.066-.14-4.116 1.808 1.947.25Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.693 0h24.613v25H.693z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShipmentIcon;
