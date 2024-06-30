import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:l4GMBqIWQT0v@ep-hidden-sun-a2pmiols.eu-central-1.aws.neon.tech/AI-builder-form?sslmode=require',
  }
});