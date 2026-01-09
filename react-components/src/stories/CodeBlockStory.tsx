import CodeBlock from "@/components/CodeBlock/CodeBlock";

export default function CodeBlockStory() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <CodeBlock language="typescript">
          {`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
        </CodeBlock>
      </div>
      <div>
        <CodeBlock language="javascript">
          {`const fetchData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
};`}
        </CodeBlock>
      </div>
      <div>
        <CodeBlock>
          {`Plain code block without language label
Multiple lines supported
With automatic overflow handling`}
        </CodeBlock>
      </div>
      <div>
        <CodeBlock language="bash" bgColor="bg-blue-50">
          {`npm install react
npm run dev
npm run build`}
        </CodeBlock>
      </div>
      <div>
        <CodeBlock language="json" bgColor="bg-purple-50">
          {`{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`}
        </CodeBlock>
      </div>
    </div>
  );
}
