import { PageShell } from "../shared/components/PageShell";
import { flamesContent } from "../shared/content/locale";

export default function App() {
  return <PageShell ariaLabel={flamesContent.app.applicationLabel} />;
}