// Supabase Configuration
// Create a free account at https://supabase.com
// Then go to Project Settings > API to get these values

export const SUPABASE_URL: string = 'https://mvrsoaefuqrslzpbkvnf.supabase.co';
export const SUPABASE_ANON_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cnNvYWVmdXFyc2x6cGJrdm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NTY2MjEsImV4cCI6MjA4NDAzMjYyMX0.Ds6MfNoKyMUgcX5iL3YPbF1Htmy18XI1TebKZoElKRI';

// Validation
export const isSupabaseConfigured = (): boolean => {
    return SUPABASE_URL !== 'YOUR_SUPABASE_URL' && 
           SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY' &&
           SUPABASE_URL.startsWith('https://');
};
