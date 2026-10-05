import { bodyHtml } from './content';

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
