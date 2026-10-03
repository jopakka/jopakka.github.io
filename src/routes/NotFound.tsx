import { Link as RouterLink } from "react-router";
import { View, Text, Button } from "reshaped";

export default function NotFound() {
  return (
    <View gap={4} paddingTop={16} align="start">
      <Text as="h1" variant="title-2" className="display">Page not found</Text>
      <Text variant="body-1" color="neutral-faded">
        This address doesn't exist. Head back to the start.
      </Text>
      <Button render={(a) => <RouterLink {...a} to="/" />}>Go to home</Button>
    </View>
  );
}