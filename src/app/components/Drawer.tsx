import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import styles from "./Drawer.module.scss";

export interface DrawerProps {
  isVisible: boolean;
  children: ReactNode;
  backStyle?: CSSProperties;
  style?: CSSProperties;
}

export default function Drawer({
  isVisible,
  backStyle,
  style,
  children,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerRef.current == null) return;
    drawerRef.current.style.display = isVisible ? "block" : "none";
  }, [isVisible]);

  return (
    <div className={styles.backdrop} ref={drawerRef} style={backStyle}>
      <div className={styles.drawer} style={style}>
        {children}
      </div>
    </div>
  );
}
