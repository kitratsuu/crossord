import { auth } from "@/lib/auth";

// Next.js 16 needs `proxy` to be a real function, not a re-export.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function proxy(...args: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (auth as any)(...args);
}

export const config = {
  matcher: ["/admin/:path*"],
};
