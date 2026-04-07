import { FlamesHome } from "../features/components";
import { PageShell } from "../shared/components";
import { flamesContent } from "../shared/content/locale";

export default function App() {
  return (
    <PageShell ariaLabel={flamesContent.app.applicationLabel}>
      <FlamesHome />
    </PageShell>
  );
}