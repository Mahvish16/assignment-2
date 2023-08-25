import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'your-supabase-api-url',
  'your-supabase-public-key'
);

export { supabase };