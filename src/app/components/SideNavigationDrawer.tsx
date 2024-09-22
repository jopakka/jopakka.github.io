import { ReactElement, useCallback, useMemo } from "react";
import IconClose from "../icons/IconClose";
import NavigationItem from "../model/NavigationItem";
import Drawer from "./Drawer";
import styles from "./SideNavigationDrawer.module.scss";

export interface SideNavigationDrawerProps {
  isVisible: boolean;
  navigationItems: NavigationItem[];
  onDismissRequest: () => void;
}

export default function SideNavigationDrawer({
  isVisible,
  navigationItems,
  onDismissRequest,
}: SideNavigationDrawerProps) {
  const allLinks = useMemo(() => {
    return [
      {id: "thisIsMe", label: "Joonas Niemi", link: "#"},
      ...navigationItems
    ]
  }, [navigationItems])

  const onLinkClick = useCallback(
    (item: NavigationItem) => {
      window.location.href = item.link;
      onDismissRequest();
    },
    [onDismissRequest]
  );

  return (
    <Drawer isVisible={isVisible}>
      <DrawerItem onClick={onDismissRequest}>
        <IconClose width={24} height={24} />
      </DrawerItem>
      {allLinks.map((item) => {
        return (
          <DrawerItem key={item.id} onClick={() => onLinkClick(item)}>
            <p>{item.label}</p>
          </DrawerItem>
        );
      })}
    </Drawer>
  );
}

interface DrawerItemProps {
  onClick?: () => void;
  children: ReactElement;
}

const DrawerItem = ({ onClick, children }: DrawerItemProps) => {
  return (
    <div className={styles.sideDrawerItem} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};
