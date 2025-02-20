export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  return {
    title: `Post ${id}`,
    description: `Detailed information about post ${id}.`,
  };
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Post {id}</h1>
      <p className="text-lg text-gray-600">
        This page was generated using dynamic routing in the app directory with
        TailwindCSS.
      </p>
    </main>
  );
}
