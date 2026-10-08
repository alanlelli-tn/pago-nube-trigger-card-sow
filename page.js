import { heroHtml, introHtml, kpisHtml, restHtml } from './content';
import CommunicationPreview from './CommunicationPreview';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
      <main className="wrap">
        <section>
          <div dangerouslySetInnerHTML={{ __html: introHtml }} />
          <CommunicationPreview />
          <div dangerouslySetInnerHTML={{ __html: kpisHtml }} />
        </section>
        <div dangerouslySetInnerHTML={{ __html: restHtml }} />
      </main>
    </>
  );
}
