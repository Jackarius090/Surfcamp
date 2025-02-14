import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/layout/ContentList";
import { BlogCard } from "@/components/BlogCard";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function Home() {
  const data = await loader();
  console.dir(data, { depth: null });
  const blocks = data?.blocks || [];
  return (
    <div>
      <BlockRenderer blocks={blocks} />
      <div className="container">
        <ContentList
          headline="Check out our latest articles"
          path="/api/articles"
          component={BlogCard}
        />
      </div>
    </div>
  );
}
