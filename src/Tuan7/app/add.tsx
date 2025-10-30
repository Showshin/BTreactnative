import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { addTask } from "../db/database";

export default function Add() {
  const db = useSQLiteContext();
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!task.trim()) return;
    setLoading(true);
    await addTask(db, task);
    setLoading(false);
    router.back();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>ADD YOUR JOB</Text>

      <TextInput
        placeholder="Input your job"
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          width: "80%",
          padding: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#00AEEF",
          paddingVertical: 12,
          paddingHorizontal: 40,
          borderRadius: 8,
        }}
        onPress={handleAdd}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {loading ? "Saving..." : "FINISH →"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
