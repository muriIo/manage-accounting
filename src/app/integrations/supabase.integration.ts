import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseIntegration
{
    constructor()
    {
    }

    private supabase?: SupabaseClient<any, "public", any>;

    public init()
    {
        if (!this.supabase) {
            const url = environment.supabase_url;
            const key = environment.supabase_key;
            
            this.supabase = createClient(url, key);
        }

        return this.getClient()!;
    }

    public getClient()
    {
        return this.supabase;
    }
}