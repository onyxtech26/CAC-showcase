import Timeline from '../components/sections/Timeline';
import IntelligenceHub from '../components/sections/IntelligenceHub';

export default function ProcessPage() {
  return (
    <div className="pt-16 space-y-8">
      {/* Process Stepper Section */}
      <Timeline />

      {/* Intelligence Hub Dashboard */}
      <IntelligenceHub />
    </div>
  );
}
