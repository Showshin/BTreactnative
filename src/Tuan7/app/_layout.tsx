import { Stack } from "expo-router";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { createTable } from "../db/database";
import { View, Text } from "react-native";

function InitDb({ children }: { children: React.ReactNode }) {
  const db = useSQLiteContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await createTable(db);
        setIsReady(true);
      } catch (e) {
        console.error("Database init error:", e);
      }
    }
    init();
  }, [db]);

  if (!isReady)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading database...</Text>
      </View>
    );

  return <>{children}</>;
}

export default function Layout() {
  return (
    <SQLiteProvider databaseName="tasks.db">
      <InitDb>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="showlist" />
          <Stack.Screen name="add" />
        </Stack>
      </InitDb>
    </SQLiteProvider>
  );
}
