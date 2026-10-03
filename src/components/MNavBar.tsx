import { useState } from "react";
import {
  Button,
  Container,
  Icon,
  Text,
  View,
} from "reshaped";

export default function MNavBar() {
  // const [open, setOpen] = useState(false);

  // const links = ["Home", "Products", "Pricing", "About"];

  return (
    <View
      as="nav"
      backgroundColor="brand"
    >
      <Container width="960px">
        <View
          direction="row"
          align="center"
          justify="space-between"
          paddingBlock={4}
        >
          {/* Logo */}
          <Text variant="title-3" weight="bold">
            Joonas Niemi
          </Text>

          {/* Desktop navigation */}
          {/* <View
            direction="row"
            align="center"
            gap={3}
          >
            {links.map((link) => (
              <Button key={link} variant="ghost">
                {link}
              </Button>
            ))}

            <Button variant="solid">
              Get started
            </Button>
          </View> */}

          {/* Mobile menu button */}
          {/* <View>
            <Button
              variant="ghost"
              size="medium"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
            </Button>
          </View> */}
        </View>

        {/* Mobile navigation */}
        {/* {open && (
          <View
            direction="column"
            gap={2}
            paddingBottom={4}
            hide="l"
          >
            {links.map((link) => (
              <Button
                key={link}
                variant="ghost"
                width="full"
                onClick={() => setOpen(false)}
              >
                {link}
              </Button>
            ))}

            <Button
              variant="solid"
              width="full"
              onClick={() => setOpen(false)}
            >
              Get started
            </Button>
          </View>
        )} */}
      </Container>
    </View>
  );
}
