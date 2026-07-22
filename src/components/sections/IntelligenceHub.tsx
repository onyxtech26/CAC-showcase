import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Globe,
  Network,
  Wrench,
  Calculator,
  Upload,
  FolderCheck,
  Calendar,
  FileText,
  CheckCircle2,
  Lock,
  ChevronRight,
  Eye,
  Sliders,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

type Tab = 'intelligence' | 'estate' | 'renovation' | 'portal';

export default function IntelligenceHub() {
  const [activeTab, setActiveTab] = useState<Tab>('intelligence');

  // Intelligence Centre State
  const [searchTitle, setSearchTitle] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any | null>(null);

  // Estate Resolution State
  const [estateValue, setEstateValue] = useState(1500000);
  const [heirCount, setHeirCount] = useState(4);
  const [selectedFamilyNode, setSelectedFamilyNode] = useState<string>('grandparent');

  // Renovation ROI State
  const [renoBudget, setRenoBudget] = useState(180000);
  const [currentVal, setCurrentVal] = useState(850000);

  // Client Portal State
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResults, setAiResults] = useState<any[]>([]);

  // Actions
  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTitle.trim()) return;
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        titleNo: searchTitle.toUpperCase(),
        district: 'Illustrative example — Johor Bahru district',
        lotNo: 'Sample Lot (Example)',
        originalGrantee: 'Sample estate owner (example only)',
        currentStatus: 'Illustrative Example',
        timeline: [
          { year: 'Year A', event: 'Original land grant issued to the pioneer owner.' },
          { year: 'Year B', event: 'Pioneer owner passes away; estate becomes intestate.' },
          { year: 'Year C', event: 'An unauthorised deed of transfer is registered.' },
          { year: 'Year D', event: 'Legal heirs challenge the transfer; a private caveat is lodged.' }
        ]
      });
    }, 1200);
  };

  const handleCalculateROI = () => {
    const upliftRate = renoBudget > 200000 ? 0.35 : 0.22;
    const postValue = Math.round(currentVal * (1 + upliftRate));
    const netProfit = postValue - currentVal - renoBudget;
    return {
      postValue,
      netProfit,
      upliftPercent: (upliftRate * 100).toFixed(0)
    };
  };

  const roi = handleCalculateROI();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleAISearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setAiResults([
      { title: 'Example result for: ' + aiQuery, status: 'Illustrative example of a deed-ledger match a real search might surface.', prob: 'Example' },
      { title: 'Example: Historical Cadastral Plan', status: 'Illustrative example of an overlapping-coordinates match.', prob: 'Example' }
    ]);
  };

  return (
    <section id="intelligence-hub" className="py-16 md:py-24 bg-transparent border-b border-secondary/5 relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 forensic-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
            // See How We Work
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            An Inside Look At <span className="text-tertiary">Our Process</span>
          </h3>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            These interactive walkthroughs use illustrative example data to show how each part of our process works — they are not a live database or client system.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-secondary/10 pb-6 max-w-4xl mx-auto">
          {[
            { id: 'intelligence', label: 'Property Intelligence Centre', icon: Globe },
            { id: 'estate', label: 'Family Estate Resolution', icon: Network },
            { id: 'renovation', label: 'Renovation ROI Calculator', icon: Wrench },
            { id: 'portal', label: 'Case Tracking Walkthrough', icon: Lock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2.5 px-5 py-3 border font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary text-white border-secondary shadow-[0_0_15px_rgba(19,41,75,0.20)]'
                    : 'bg-secondary/5 border-secondary/10 hover:border-secondary/20 text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-secondary'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-surface p-6 sm:p-8 lg:p-12 border-secondary/10 min-h-[500px] flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Property Intelligence Centre */}
            {activeTab === 'intelligence' && (
              <motion.div
                key="intelligence"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-on-surface">Property Title Scanner</h4>
                    <p className="font-sans text-xs text-on-surface-variant font-light mt-1">
                      Try it with any land code — this walkthrough uses one illustrative example, not a live registry.
                    </p>
                  </div>

                  <form onSubmit={handleStartScan} className="space-y-4">
                    <div>
                      <label className="block font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">Title No / Land Code</label>
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            placeholder="Try any code, e.g. Lot 12345"
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                            className="w-full bg-secondary/5 border border-secondary/10 px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isScanning}
                          className="bg-tertiary text-white px-6 font-mono text-xs uppercase font-bold hover:bg-[#8f6519] transition-colors flex items-center gap-2"
                        >
                          <Search className="w-4 h-4" /> Scan
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="p-4 border border-secondary/10 bg-secondary/[0.03] space-y-3 font-sans text-xs text-on-surface-variant font-light">
                    <p className="font-mono text-[10px] text-tertiary font-bold uppercase tracking-wider">// What a real investigation covers</p>
                    <p>In an actual engagement, our team searches: </p>
                    <ul className="list-disc pl-4 space-y-1.5">
                      <li>Land registry deeds (1950–present)</li>
                      <li>Colonial-era survey plans and archives</li>
                      <li>Municipal cadastral maps</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px] border border-secondary/10 bg-secondary/5 p-6 relative">
                  {isScanning && (
                    <div className="absolute inset-0 bg-surface/90 flex flex-col items-center justify-center space-y-4 z-20">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-secondary/20 border-t-secondary animate-spin" />
                        <div className="w-8 h-8 rounded-full border border-tertiary/20 border-t-tertiary animate-ping" />
                      </div>
                      <p className="font-mono text-[10px] uppercase text-secondary tracking-widest animate-pulse">Loading example walkthrough...</p>
                    </div>
                  )}

                  {!isScanning && !scanResult && (
                    <div className="text-center space-y-3 py-10">
                      <Globe className="w-12 h-12 text-secondary/20 mx-auto" />
                      <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Awaiting input</p>
                      <p className="font-sans text-xs text-on-surface-variant/60 max-w-sm mx-auto font-light">
                        Type any land code in the search bar and press Scan to see an illustrative walkthrough.
                      </p>
                    </div>
                  )}

                  {scanResult && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start border-b border-secondary/10 pb-4">
                        <div>
                          <span className="font-mono text-[9px] uppercase bg-tertiary/10 text-tertiary px-2 py-0.5 border border-tertiary/30">
                            Illustrative Example
                          </span>
                          <h5 className="font-display text-xl font-bold text-on-surface mt-2">{scanResult.lotNo}</h5>
                          <p className="font-sans text-xs text-on-surface-variant font-light">{scanResult.district}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-[10px] text-secondary block font-bold">Search Term</span>
                          <span className="font-mono text-xs text-on-surface">{scanResult.titleNo}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Sample Findings</span>
                          <div className="space-y-2.5 font-sans text-xs">
                            <div>
                              <span className="text-on-surface-variant font-light block">Illustrative original owner:</span>
                              <span className="text-on-surface font-semibold">Sample estate owner (example only)</span>
                            </div>
                            <div>
                              <span className="text-on-surface-variant font-light block">Illustrative status:</span>
                              <span className="text-on-surface font-semibold">Under dispute (private caveat lodged)</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Example Chronology</span>
                          <div className="space-y-3 border-l border-secondary/10 pl-3">
                            {scanResult.timeline.map((item: any, i: number) => (
                              <div key={i} className="relative font-sans text-xs">
                                <span className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full border border-tertiary bg-surface" />
                                <span className="font-mono text-xs text-tertiary font-bold">{item.year}</span>
                                <p className="text-on-surface-variant font-light mt-0.5">{item.event}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Tab 2: Family Estate Resolution */}
            {activeTab === 'estate' && (
              <motion.div
                key="estate"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-on-surface">Inheritance Flow Simulation</h4>
                    <p className="font-sans text-xs text-on-surface-variant font-light mt-1">
                      An illustrative model of how estate assets are typically divided under standard probate rules and where gaps commonly occur.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Total Estate Value</label>
                        <span className="font-mono text-sm text-tertiary font-bold">RM {estateValue.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="500000"
                        max="10000000"
                        step="100000"
                        value={estateValue}
                        onChange={(e) => setEstateValue(Number(e.target.value))}
                        className="w-full h-1 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-tertiary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Number of Beneficiaries</label>
                        <span className="font-mono text-sm text-tertiary font-bold">{heirCount} Heirs</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        step="1"
                        value={heirCount}
                        onChange={(e) => setHeirCount(Number(e.target.value))}
                        className="w-full h-1 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-tertiary"
                      />
                    </div>
                  </div>

                  <div className="p-4 border border-secondary/10 bg-secondary/[0.03] rounded-none space-y-3 font-sans text-xs">
                    <p className="font-mono text-[10px] text-tertiary uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Why This Matters
                    </p>
                    <p className="text-on-surface-variant font-light leading-relaxed">
                      Without a forensic title check, estates can go to distribution with forgotten deeds, historical land grants, or joint holdings still unaccounted for.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 border border-secondary/10 bg-secondary/5 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Illustrative Inheritance Division</span>

                    {/* Family Tree Visual */}
                    <div className="py-6 flex flex-col items-center space-y-4 border border-secondary/10 bg-white/40">
                      {/* Ancestor Node */}
                      <div
                        onClick={() => setSelectedFamilyNode('grandparent')}
                        className={`px-4 py-2 border cursor-pointer transition-all duration-300 font-mono text-xs ${
                          selectedFamilyNode === 'grandparent'
                            ? 'border-tertiary bg-tertiary/10 text-tertiary'
                            : 'border-secondary/10 text-on-surface-variant hover:border-secondary/20'
                        }`}
                      >
                        Pioneer Estate Owner (Deceased)
                        <span className="block text-[10px] opacity-75">RM {estateValue.toLocaleString()} Asset Pool</span>
                      </div>

                      {/* Connection lines */}
                      <div className="w-[2px] h-6 bg-secondary/10" />

                      {/* Beneficiaries row */}
                      <div className="flex flex-wrap justify-center gap-4 px-2 w-full">
                        {Array.from({ length: heirCount }).map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedFamilyNode(`heir-${idx}`)}
                            className={`px-3 py-1.5 border cursor-pointer transition-all duration-300 font-mono text-[11px] text-center ${
                              selectedFamilyNode === `heir-${idx}`
                                ? 'border-secondary bg-secondary/10 text-secondary'
                                : 'border-secondary/10 text-on-surface-variant hover:border-secondary/20'
                            }`}
                          >
                            Heir {idx + 1}
                            <span className="block text-[9px] text-on-surface-variant/75">
                              RM {Math.round(estateValue / heirCount).toLocaleString()} Share
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-secondary/10 pt-4 mt-6 flex justify-between items-center text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-secondary uppercase block font-bold">Standard Probate Share</span>
                      <span className="font-mono text-sm text-on-surface font-semibold">
                        RM {Math.round(estateValue / heirCount).toLocaleString()} per heir
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-tertiary uppercase block font-bold">Illustrative Potential Uplift</span>
                      <span className="font-mono text-sm text-tertiary font-bold">+RM {Math.round((estateValue * 0.25) / heirCount).toLocaleString()} avg.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Renovation ROI Calculator */}
            {activeTab === 'renovation' && (
              <motion.div
                key="renovation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-on-surface">Value Uplift Model</h4>
                    <p className="font-sans text-xs text-on-surface-variant font-light mt-1">
                      A simple illustrative calculator for weighing renovation spend against potential resale value.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Current Value (As-Is)</label>
                        <span className="font-mono text-sm text-on-surface font-bold">RM {currentVal.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="300000"
                        max="3000000"
                        step="50000"
                        value={currentVal}
                        onChange={(e) => setCurrentVal(Number(e.target.value))}
                        className="w-full h-1 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Renovation Budget</label>
                        <span className="font-mono text-sm text-on-surface font-bold">RM {renoBudget.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="30000"
                        max="500000"
                        step="10000"
                        value={renoBudget}
                        onChange={(e) => setRenoBudget(Number(e.target.value))}
                        className="w-full h-1 bg-secondary/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>
                  </div>

                  <div className="p-4 border border-secondary/10 bg-secondary/[0.03] space-y-2.5 font-sans text-xs text-on-surface-variant font-light">
                    <p className="font-mono text-[10px] text-tertiary font-bold uppercase tracking-wider">// Renovation & Value Enhancement</p>
                    <p>
                      Properties recovered through forensic work are often in run-down, subsale condition. Thoughtful interior, exterior, and landscape work can meaningfully improve resale value.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 border border-secondary/10 bg-secondary/5 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Illustrative Post-Renovation Estimate</span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border border-secondary/10 bg-white/40 text-center">
                        <span className="font-mono text-[9px] uppercase text-on-surface-variant block">Value Uplift</span>
                        <span className="font-display text-3xl font-bold text-tertiary block mt-1">+{roi.upliftPercent}%</span>
                      </div>

                      <div className="p-4 border border-secondary/10 bg-white/40 text-center">
                        <span className="font-mono text-[9px] uppercase text-on-surface-variant block">New Market Value</span>
                        <span className="font-display text-2xl font-bold text-on-surface block mt-1">RM {roi.postValue.toLocaleString()}</span>
                      </div>

                      <div className="p-4 border border-secondary/10 bg-white/40 text-center">
                        <span className="font-mono text-[9px] uppercase text-on-surface-variant block">Net Profit</span>
                        <span className="font-display text-2xl font-bold text-secondary block mt-1">RM {roi.netProfit.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="p-4 border border-secondary/10 bg-secondary/[0.03] flex items-start gap-3">
                      <Sliders className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                      <div className="font-sans text-xs text-on-surface-variant leading-relaxed">
                        <p className="font-mono text-[10px] text-on-surface font-bold uppercase tracking-wider">Typical Upgrade Priorities</p>
                        <p className="mt-1 font-light">
                          Interior staging and layout improvements tend to offer the strongest return, alongside landscaping and boundary presentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-secondary/10 pt-4 mt-6 flex justify-between items-center text-xs font-mono">
                    <span className="text-on-surface-variant/80">Illustrative estimate only — actual figures depend on the property</span>
                    <span className="text-secondary font-bold">CAC Property Forensic</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: Client Portal & AI Search */}
            {activeTab === 'portal' && (
              <motion.div
                key="portal"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-on-surface">Case Tracking Walkthrough</h4>
                    <p className="font-sans text-xs text-on-surface-variant font-light mt-1">
                      A preview of how we keep clients updated once an investigation is underway — using a sample case, not a live account.
                    </p>
                  </div>

                  <div className="border border-secondary/10 p-5 bg-secondary/[0.02] space-y-4">
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Sample Case Status (Illustrative)</span>

                    <div className="space-y-3 font-sans text-xs">
                      <div className="flex justify-between border-b border-secondary/5 pb-2">
                        <span className="text-on-surface-variant font-light">Subject Estate:</span>
                        <span className="text-on-surface font-medium">Sample estate (example only)</span>
                      </div>
                      <div className="flex justify-between border-b border-secondary/5 pb-2">
                        <span className="text-on-surface-variant font-light">Investigation Step:</span>
                        <span className="text-tertiary font-bold">04 // Forensic Analysis</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-on-surface-variant font-light">Legal Referrals:</span>
                        <span className="text-on-surface font-medium">2 attorneys appointed</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border border-secondary/10 p-4 relative flex flex-col items-center justify-center border-dashed bg-secondary/[0.02] hover:bg-secondary/[0.04] transition-colors cursor-pointer group">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform mb-2" />
                      <span className="font-mono text-[10px] uppercase text-on-surface tracking-wider">Try It — Drop A File Here</span>
                      <span className="font-sans text-[10px] text-on-surface-variant/60 font-light mt-1">Preview only — nothing is uploaded or stored</span>
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-secondary uppercase tracking-widest font-bold block">// Selected Files ({uploadedFiles.length}) — not actually uploaded</span>
                      <div className="max-h-24 overflow-y-auto space-y-1 bg-secondary/5 p-2 font-mono text-[10px]">
                        {uploadedFiles.map((name, i) => (
                          <div key={i} className="flex justify-between items-center text-on-surface-variant border-b border-secondary/5 pb-1">
                            <span className="truncate max-w-[200px]">{name}</span>
                            <span className="text-tertiary">Preview</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 border border-secondary/10 bg-secondary/5 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">// Search Concept Preview</span>
                    <p className="font-sans text-xs text-on-surface-variant font-light">
                      A concept preview of registry search — not a working search engine. Try any name or place below to see an example result.
                    </p>

                    <form onSubmit={handleAISearch} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Try any name or location"
                        value={aiQuery}
                        onChange={(e) => setAiQuery(e.target.value)}
                        className="flex-grow bg-secondary/5 border border-secondary/10 px-4 py-2.5 text-xs text-on-surface focus:outline-none focus:border-secondary font-mono"
                      />
                      <button
                        type="submit"
                        className="bg-secondary text-white border border-secondary hover:bg-tertiary hover:border-tertiary px-5 font-mono text-xs uppercase transition-colors"
                      >
                        Search
                      </button>
                    </form>

                    <div className="space-y-3 min-h-[120px]">
                      {aiResults.length === 0 && (
                        <div className="text-center py-6 text-xs text-on-surface-variant/40 font-mono">
                          Enter a search above to see an example result
                        </div>
                      )}

                      {aiResults.map((res, i) => (
                        <div key={i} className="p-3 border border-secondary/10 bg-white/40 space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-xs text-on-surface font-semibold">{res.title}</span>
                            <span className="font-mono text-[9px] bg-tertiary/10 text-tertiary px-2 py-0.5 border border-tertiary/30 font-bold">{res.prob}</span>
                          </div>
                          <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">{res.status}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-secondary/10 pt-4 mt-6 flex justify-between items-center text-xs">
                    <span className="font-mono text-[9px] text-on-surface-variant/60 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-secondary" /> A concept preview, not a live system
                    </span>
                    <span className="font-mono text-[10px] text-secondary font-bold">CAC Property Forensic</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Small Call to Action under the portal */}
        <div className="mt-8 text-center flex flex-wrap justify-center items-center gap-4">
          <span className="font-sans text-xs text-on-surface-variant font-light">
            Need a custom title scan or estate recovery feasibility plan?
          </span>
          <a
            href="#contact"
            className="font-mono text-xs text-tertiary hover:text-white uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors"
          >
            Start An Inquiry <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
