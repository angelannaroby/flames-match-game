import { PageShell } from "../shared/components/PageShell";
import { flamesContent } from "../shared/content/locale";
import { FlamesHome } from "../features/flames/components/FlamesHome";

export default function App() {
  return (
    <PageShell ariaLabel={flamesContent.app.applicationLabel}>
      <FlamesHome />
    </PageShell>
  );
}