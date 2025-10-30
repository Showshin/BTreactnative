import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { getTasks } from "../db/database";

export default function ShowList() {
  const db = useSQLiteContext();
  const [tasks, setTasks] = useState<{ id: number; name: string }[]>([]);
  const { name } = useLocalSearchParams<{ name?: string }>();

  const fetchTasks = useCallback(async () => {
    const result = await getTasks(db);
    setTasks(result);
  }, [db]);

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [fetchTasks])
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 10 }}>
        Hi {name || "Friend"} 👋
      </Text>
      <Text style={{ textAlign: "center", color: "gray", marginBottom: 20 }}>
        Have a great day ahead
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f4f4f4",
              marginBottom: 10,
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#00AEEF",
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 40,
          right: 30,
        }}
        onPress={() => router.push("/add")}
      >
        <Text style={{ color: "#fff", fontSize: 28 }}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}
