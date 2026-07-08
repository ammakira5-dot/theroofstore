import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const trademarkMonitoringLogTable = pgTable("trademark_monitoring_log", {
  id: serial("id").primaryKey(),
  entryType: text("entry_type").notNull(), // "manual" | "auto_check"
  summary: text("summary").notNull(),
  details: text("details"),
  sourceUrl: text("source_url"),
  contentSnapshot: text("content_snapshot"),
  contentHash: text("content_hash"),
  recordedBy: text("recorded_by"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertTrademarkMonitoringLogSchema = createInsertSchema(trademarkMonitoringLogTable).omit({
  id: true,
  createdAt: true,
});
export type InsertTrademarkMonitoringLog = z.infer<typeof insertTrademarkMonitoringLogSchema>;
export type TrademarkMonitoringLog = typeof trademarkMonitoringLogTable.$inferSelect;
