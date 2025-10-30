import { SQLiteDatabase } from "expo-sqlite";

// Tạo bảng nếu chưa tồn tại
export async function createTable(db: SQLiteDatabase) {
  await db.runAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);
}

// Thêm task mới
export async function addTask(db: SQLiteDatabase, name: string) {
  if (!name.trim()) return;
  await db.runAsync("INSERT INTO tasks (name) VALUES (?)", [name]);
}

// Lấy danh sách task
export async function getTasks(db: SQLiteDatabase) {
  const result = await db.getAllAsync<{ id: number; name: string }>(
    "SELECT * FROM tasks ORDER BY id DESC"
  );
  return result;
}

// Xoá task (tuỳ chọn)
export async function deleteTask(db: SQLiteDatabase, id: number) {
  await db.runAsync("DELETE FROM tasks WHERE id = ?", [id]);
}
