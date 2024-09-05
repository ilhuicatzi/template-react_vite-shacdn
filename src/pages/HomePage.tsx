import CodeString from "@/components/code/CodeString"
function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <CodeString code={"npm install code "} />
      </section>
    </div>
  )
}

export default HomePage