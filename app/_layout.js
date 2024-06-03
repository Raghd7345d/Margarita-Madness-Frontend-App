import { Stack } from "expo-router";
import { UserProvider } from "../context/UserProvider";

export default function MainStack() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" options={{ presentation: "modal" }} />
      </Stack>
    </UserProvider>
  );
}
