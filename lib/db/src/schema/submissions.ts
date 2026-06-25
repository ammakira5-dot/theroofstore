import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const submissionsTable = pgTable("submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  address: text("address"),
  roofType: text("roof_type"),
  message: text("message"),
  source: text("source").notNull().default("contact-form"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Submission = typeof submissionsTable.$inferSelect;
