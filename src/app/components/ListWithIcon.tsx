import { CSSProperties, ReactElement, useMemo } from "react";
import styles from "./ListWithIcon.module.scss";

export interface ListItemProps {
  icon: ReactElement;
  text: string | ReactElement;
  containerStyle?: CSSProperties;
  containerClassName?: string;
}

const ListItem = ({
  icon,
  text,
  containerStyle,
  containerClassName,
}: ListItemProps) => {
  const typeOfText = useMemo(() => typeof text, [text]);

  return (
    <div
      className={`${styles.listItem} ${containerClassName ?? ""}`}
      style={containerStyle}
    >
      {icon}
      {typeOfText === "string" ? <p>{text}</p> : text}
    </div>
  );
};

export interface ListWithIconProps {
  items: ListItemProps[];
  containerStyle?: CSSProperties;
  itemClassName?: string;
  itemStyle?: CSSProperties;
  containerClassName?: string;
}

export const ListWithIcon = ({
  items,
  containerStyle,
  itemStyle,
  itemClassName,
  containerClassName,
}: ListWithIconProps) => {
  return (
    <div
      className={`${styles.listContainer} ${containerClassName ?? ""}`}
      style={containerStyle}
    >
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item.text}
          icon={item.icon}
          containerStyle={itemStyle}
          containerClassName={itemClassName}
        />
      ))}
    </div>
  );
};
