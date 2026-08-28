import { db, run } from "./db.mjs";
async function setup() {
  await run(
    `CREATE TABLE IF NOT EXISTS shops ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, area TEXT NOT NULL, description TEXT NOT NULL )`,
  );
  await run(
    `CREATE TABLE IF NOT EXISTS shop_reviews ( id INTEGER PRIMARY KEY AUTOINCREMENT, shop_id INTEGER NOT NULL, review_text TEXT NOT NULL, FOREIGN KEY (shop_id) REFERENCES shops(id) )`,
  );
  const result = await run(
    "INSERT INTO shops (name, area, description) VALUES (?, ?, ?)",
    ["Example Coffee Co.", "City Centre", "A cosy spot with good pastries."],
  );
  await run("INSERT INTO shop_reviews (shop_id, review_text) VALUES (?, ?)", [
    result.lastID,
    "Great flat white, friendly staff.",
  ]);
  console.log("Database ready.");
  process.exit(0);
}
setup();