import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <Image src="/logo.svg" alt="Kaeru company logo" width={120} height={120} />
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="max-w-xl text-lg text-gray-600">
        Kaeru is a small studio crafting thoughtful, fast web experiences. We
        believe great software should be simple to use and delightful to look
        at — so that is exactly what we build.
      </p>
    </main>
  );
}
