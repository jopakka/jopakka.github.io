import {
  Outlet,
  ScrollRestoration
} from "react-router";
import { Container } from "reshaped";
import MNavBar from "./MNavBar";

export default function Layout() {
  return (
    <div className="site">
      <MNavBar />
      <Container width="960px" padding={{ s: 5, m: 8 }}>
        <main id="main">
          <Outlet />
        </main>
      </Container>
      <ScrollRestoration />
    </div>
  );
}
