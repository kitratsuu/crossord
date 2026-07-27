import Link from "next/link";
import { Badge } from "@workspace/ui/components/badge";
import { posts } from "@/app/blog/data";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <section>
                <div className="container mx-auto px-6 pt-32 pb-20">
                    <Badge
                        variant="outline"
                        className="mb-6 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                    >
                        Blog
                    </Badge>
                    <h1 className="text-4xl font-bold mb-12">
                        Notes on building software.
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group rounded-lg border p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                            >
                                <p className="text-xs text-muted-foreground mb-3">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
                                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}