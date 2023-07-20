import { z } from 'zod'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon, neonConfig } from '@neondatabase/serverless'

neonConfig.fetchConnectionCache = true

const datatabaseUrl = z.string().url().parse(process.env.DATABASE_URL)

const sql = neon(datatabaseUrl)

export const db = drizzle(sql)
