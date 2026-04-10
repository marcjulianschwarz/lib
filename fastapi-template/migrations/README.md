# Database Migrations

This directory contains database migration files for the backend.

## How It Works

- Migrations are applied automatically on application startup
- Each migration file is run exactly once (tracked in `migrations` table)
- Migrations are executed in alphabetical order by filename
- Forward-only migrations (no rollback support)

## Creating a New Migration

1. **Name your migration file with a numbered prefix:**

   ```
   002_add_video_fields.sql
   003_add_user_preferences.sql
   ```

2. **Write your SQL changes:**

   ```sql
   -- Add new columns
   ALTER TABLE content_file
   ADD COLUMN IF NOT EXISTS video_transcription TEXT;

   -- Create new indexes
   CREATE INDEX IF NOT EXISTS idx_content_type
   ON content(content_type);
   ```

3. **Use IF NOT EXISTS / IF EXISTS where possible** to make migrations idempotent:

   ```sql
   -- Good
   ALTER TABLE foo ADD COLUMN IF NOT EXISTS bar TEXT;

   -- Risky (will fail if column exists)
   ALTER TABLE foo ADD COLUMN bar TEXT;
   ```

## Safe Migration Patterns

### ✅ Safe Operations

- Adding nullable columns
- Adding columns with defaults
- Creating new tables
- Creating indexes
- Adding foreign keys (with care)

### ⚠️ Be Careful

- Dropping columns (data loss)
- Renaming columns (breaks old code)
- Changing data types (may fail with existing data)
- Adding NOT NULL constraints (fails if existing NULLs)

### Best Practice: Additive Changes

Instead of removing, just stop using:

```sql
-- ✅ Add new column, deprecate old one
ALTER TABLE content_file ADD COLUMN new_field TEXT;
-- Stop using old_field in code, remove it in a future migration

-- ❌ Don't do this immediately
-- ALTER TABLE content_file DROP COLUMN old_field;
```

## Testing Migrations

1. **Apply migrations:**

   ```bash
   # Just start the app - migrations run automatically
   python main.py
   ```

2. **Check applied migrations:**

   ```sql
   SELECT * FROM migrations ORDER BY applied_at;
   ```

3. **Manual migration (if needed):**

   ```bash
   # Connect to database
   psql -h $DB_HOST -U $DB_USER -d $DB_NAME

   # Run migration manually
   \i migrations/002_add_video_fields.sql

   # Mark as applied
   INSERT INTO migrations (migration_name) VALUES ('002_add_video_fields.sql');
   ```

## Development vs Production

### Development

- Use `drop_all()` for quick iteration (drops all tables and re-creates)
- Migrations are still tracked but not critical

### Production

- **Never use drop_all()!**
- Always create migrations for schema changes
- Take database backups before deploying
- Test migrations on staging first

## Rollback Strategy

This system uses **forward-only migrations** - no automatic rollbacks.

**If something goes wrong:**

1. Restore from backup (recommended)
2. Write a new migration to fix the issue
3. Deploy the fix migration

**Example recovery:**

```sql
-- 002_bad_migration.sql (already applied, oops!)
ALTER TABLE content_file DROP COLUMN important_field;

-- 003_fix_bad_migration.sql (restore the field)
ALTER TABLE content_file ADD COLUMN important_field TEXT;
-- Manually restore data from backup if needed
```
