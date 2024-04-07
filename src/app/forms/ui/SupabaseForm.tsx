import { createClient } from '../utils/supabase/server'
import { cookies } from 'next/headers'
import { getClientRecord } from './insertRow'

export default async function SupabaseForm() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // const { data: todo } = await supabase.from('todo').select()
    const { data, error } = await supabase.from('offercustomers').insert([getClientRecord])
}