"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../../types_db";

export const createServerSupabaseClient = async (
  admin: boolean = false
) => {
  const cookieStore = await cookies(); // 여기서 await로 쿠키 가져오기

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const SUPABASE_SERVICE_ROLE = process.env.NEXT_SUPABASE_SERVICE_ROLE;

  if (!SUPABASE_URL) {
    throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_URL is not set.");
  }

  if (admin && !SUPABASE_SERVICE_ROLE) {
    throw new Error("Environment variable NEXT_SUPABASE_SERVICE_ROLE is not set.");
  }

  if (!admin && !SUPABASE_ANON_KEY) {
    throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY is not set.");
  }

  return createServerClient<Database>(
    SUPABASE_URL,
    admin ? SUPABASE_SERVICE_ROLE! : SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const value = cookieStore.get(name)?.value;
          return value;
        },
        set(name: string, value: string, options: CookieOptions) {
          console.warn(
            `Cookies cannot be set in Server Components. Use middleware or API routes for this.`
          );
        },
        remove(name: string, options: CookieOptions) {
          console.warn(
            `Cookies cannot be removed in Server Components. Use middleware or API routes for this.`
          );
        },
      },
    }
  );
};

export const createServerSupabaseAdminClient = async () => {
  return createServerSupabaseClient(true);
};
