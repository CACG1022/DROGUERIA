const SUPABASE_URL = "https://hqvxtynigoxxuscmwjde.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_SGlbgOAahdP5KkaEGeFeYg_Q6hC6xk5";

window.sb = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
