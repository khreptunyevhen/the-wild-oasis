import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkvbmrmahvizepqeuxdz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdmJtcm1haHZpemVwcWV1eGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMTA2NDYsImV4cCI6MjAxNDg4NjY0Nn0.BDhHLgz8kkaFBocGLbiDGo0eFXVpCuE31IwzePKspzQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
