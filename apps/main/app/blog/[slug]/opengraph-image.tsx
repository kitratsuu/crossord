import { ImageResponse } from "next/og";
import { posts } from "@/app/blog/data";

export const alt = "Crossord Insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#070B17",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#6478FF", fontWeight: 700, letterSpacing: 4 }}>
          CROSSORD INSIGHTS · {(post?.tag ?? "").toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          {post?.title ?? "Crossord Insights"}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.55)" }}>
          crossord.com/blog
        </div>
      </div>
    ),
    size,
  );
}
