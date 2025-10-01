import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-row">
      <Image
        src="/villy.png"
        alt="Villy"
        className="rounded-full"
        width={160}
        height={160}
        placeholder="blur"
        blurDataURL="/villy.png"
      />
      <div className="flex flex-col justify-end items-start ml-8">
        <h1 className="text-3xl">Adrian Villanueva</h1>
        <p className="mb-4">Software Engineer</p>
      </div>
    </section>
  );
}
