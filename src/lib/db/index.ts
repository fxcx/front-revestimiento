import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

const globalForDb = globalThis as unknown as { pool: Pool | undefined }

export const pool = globalForDb.pool ?? new Pool({ connectionString: process.env.DATABASE_URL, max: 5 })
export const db = drizzle(pool, { schema })

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool
