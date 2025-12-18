interface ViewProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function View({ title, children }: ViewProps) {
  return (
    <div className="m-auto w-full mt-4 sm:mt-20 mb-20 flex flex-col items-center">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">{title}</h1>
        {children}
      </div>
    </div>
  );
}
