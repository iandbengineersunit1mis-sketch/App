import {createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://iaptzyoxkjlwmjtpbtmf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcHR6eW94a2psd21qdHBidG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2Mjg5MjcsImV4cCI6MjEwNTIwNDkyN30.oQxU7bzVpn_vNuubN8bAHjtKy1cyRR09CZxYgQ9188s";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);