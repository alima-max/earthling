/**
 * Earthling Screen — AI Assistant / Suggestions
 * Figma: ▣ Screens & Assets > Mobile / Earthling / AI Assistant / Suggestions
 * Node: 9017:76
 *
 * State shown after the user queries "Where to next?" and
 * the AI responds with a vertical scrollable list of suggested destinations.
 *
 * Composed entirely from design-system components and CSS variables.
 */

import { StatusBar, HomeIndicator }   from '../components/native/System/index.jsx';
import { BottomNav }                  from '../components/native/Button/index.jsx';
import { SearchInput }                from '../components/native/Input/index.jsx';
import { DestinationList }            from '../components/native/Destination/index.jsx';

// ─── Default suggestion data ──────────────────────────────────────────────────
// Replace with real data from your API / state manager.
const DEFAULT_SUGGESTIONS = [
  { name: 'Kyoto',     location: 'Japan',        tag: 'CULTURE',   color: 'var(--color-dark-green)' },
  { name: 'Lisbon',    location: 'Portugal',      tag: 'CITY',      color: 'var(--color-brown)' },
  { name: 'Cape Town', location: 'South Africa',  tag: 'NATURE',    color: 'var(--color-sage)' },
  { name: 'Patagonia', location: 'Argentina',     tag: 'ADVENTURE', color: 'var(--color-violet-shade)' },
  { name: 'Marrakech', location: 'Morocco',       tag: 'CULTURE',   color: 'var(--color-dark-gray)' },
  { name: 'Reykjavik', location: 'Iceland',       tag: 'NATURE',    color: 'var(--color-dark-green)' },
];

// ─── Screen ───────────────────────────────────────────────────────────────────
export function AIAssistantSuggestions({
  heading       = 'Where to next?',
  aiSubtitle    = "Based on your vibe — here's where to go",
  suggestions   = DEFAULT_SUGGESTIONS,
  activeNavItem = 'Browse',
  onNavSelect,
  onDestinationSelect,
  onSearch,
}) {
  return (
    <div className="ai-assistant-screen">
      {/* iOS Status Bar */}
      <StatusBar time="9:41" />

      {/* Heading — AI question */}
      <div className="ai-assistant-screen__chat">
        <p className="ai-assistant-screen__heading">{heading}</p>
      </div>

      {/* AI subtitle */}
      <p className="ai-assistant-screen__subtitle">{aiSubtitle}</p>

      {/* Suggested destinations list */}
      <DestinationList
        destinations={suggestions}
        onSelect={onDestinationSelect}
      />

      {/* Search / voice input */}
      <div className="ai-assistant-screen__search-wrap">
        <SearchInput placeholder="Speak or type" onChange={onSearch} />
      </div>

      {/* Bottom navigation + home indicator */}
      <div className="ai-assistant-screen__nav">
        <BottomNav activeItem={activeNavItem} onSelect={onNavSelect} />
        <HomeIndicator />
      </div>
    </div>
  );
}

export default AIAssistantSuggestions;
