import CodeString from "@/components/code/CodeString"
import Code from "@/components/code/Code"
function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <CodeString code={"npm install code "} />
        <div className="flex justify-around gap-4 mt-5">
          <Code color="blue">TypeScript</Code>
          <Code color="green">Vue</Code>
          <Code color="yellow">JavaScript</Code>
          <Code color="rose">NestJS</Code>
        </div>
      </section>
    </div>
  )
}

export default HomePage