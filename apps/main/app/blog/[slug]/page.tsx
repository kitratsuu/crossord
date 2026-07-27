import { notFound } from "next/navigation";
import { posts } from "@/app/blog/data";

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params:Promise <{ slug: string }> }) {
    const { slug } =await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <main className="min-h-screen">
            <article className="container mx-auto px-6 pt-32 pb-20 max-w-2xl">
                <p className="text-xs text-muted-foreground mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
            </article>
        </main>
    );
}