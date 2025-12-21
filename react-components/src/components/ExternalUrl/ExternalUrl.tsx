interface ExternalUrlProps {
  url: string;
  title?: string;
}

export default function ExternalUrl({ url, title }: ExternalUrlProps) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 hover:underline text-sm break-all"
      >
        {title ?? url}
      </a>
    </div>
  );
}
