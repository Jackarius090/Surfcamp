import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function Home() {
  const data = await loader();
  console.dir(data, { depth: null });
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
