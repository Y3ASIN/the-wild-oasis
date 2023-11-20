import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lqsqiiefbrunzjqhhsdz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxc3FpaWVmYnJ1bnpqcWhoc2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NjM5NzQsImV4cCI6MjAxNTAzOTk3NH0.stukdY7Vgg0bo7RUClzfrvf5F-hBdvmXxSnsuIsa6Kg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
