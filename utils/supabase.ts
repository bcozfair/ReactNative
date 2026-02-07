import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://dmnpcauwemnvqwnwolrm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbnBjYXV3ZW1udnF3bndvbHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MzU2ODcsImV4cCI6MjA4NjAxMTY4N30._34ttYiz9aPw84emPdS_fjNOTulyaZRGChdo3I36MbU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
