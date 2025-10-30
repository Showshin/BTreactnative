import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        MANAGE YOUR TASK
      </Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
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
        onPress={() => router.push({ pathname: "/showlist", params: { name } })}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}
