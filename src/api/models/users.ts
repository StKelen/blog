import { int, sqliteTable, text,  } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  uid: int().primaryKey({ autoIncrement: true }),
  name: text().unique().notNull(),
  password: text().notNull(),
  email: text().unique().notNull(),
  displayName: text().notNull(),
  createdAt: int(),
  loggedInAt: int(),
});
