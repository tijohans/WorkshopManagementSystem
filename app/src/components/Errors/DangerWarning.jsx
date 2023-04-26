export default function DangerWarning({text}) {
    return (
      <section className="flex bg-yellow-100 p-4 border-2 border-spacing-2 border-yellow-300 rounded-lg my-5">
        <img src="/icons/alert-triangle.svg" alt="" className="mx-2" />
        <h2 className="underline underline-offset-4">{text}</h2>
      </section>
    )
  }