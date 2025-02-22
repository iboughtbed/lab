export default function Page() {
  return (
    <div className="min-h-[100svh] flex flex-col mx-auto max-w-xl justify-center p-20 antialiased bg-background text-foreground max-md:p-10">
      <main>
        <h1 className="font-mono text-sm font-semibold">lab.sanzhar.xyz</h1>
        <hr className="my-2 border-dashed" />
        <ol className="font-mono text-sm leading-6 mt-4 tracking-tight p-0 m-0 list-inside">
          <li className="mb-2">
            Built with{" "}
            <code className="font-inherit rounded font-semibold">
              Next.js and Turbo
            </code>
          </li>
          <li className="mb-2">
            Read docs on{" "}
            <a
              href="https://docs.sanzhar.xyz"
              className="font-inherit underline font-semibold"
            >
              docs.sanzhar.xyz
            </a>
          </li>
          <li>
            By{" "}
            <a
              href="https://sanzhar.xyz"
              className="font-inherit underline font-semibold"
            >
              sanzhar.xyz
            </a>
          </li>
        </ol>
        <hr className="my-2 border-dashed" />
        <p className="font-mono text-sm">comming soon...</p>
      </main>
    </div>
  );
}
