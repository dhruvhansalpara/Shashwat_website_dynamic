import React from 'react';
import { Calendar, MapPin, Search, Users } from 'lucide-react';
import ModernDatePicker from '../../../../components/shared/ModernDatePicker';
import { cn } from '../../../../utils/cn';

type HeroSearchFormProps = {
  destination: string;
  travelDate: string;
  travelers: string;
  suggestionsOpen: boolean;
  highlightedSuggestionIndex: number;
  suggestions: string[];
  minTravelDate: string;
  destinationWrapRef: React.RefObject<HTMLDivElement | null>;
  onSubmit: (event: React.FormEvent) => void;
  onDestinationChange: (value: string) => void;
  onDestinationFocus: () => void;
  onDestinationKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onTravelDateChange: (value: string) => void;
  onTravelersChange: (value: string) => void;
  onSuggestionHover: (index: number) => void;
  onSuggestionPick: (value: string) => void;
  onSuggestionMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function HeroSearchForm({
  destination,
  travelDate,
  travelers,
  suggestionsOpen,
  highlightedSuggestionIndex,
  suggestions,
  minTravelDate,
  destinationWrapRef,
  onSubmit,
  onDestinationChange,
  onDestinationFocus,
  onDestinationKeyDown,
  onTravelDateChange,
  onTravelersChange,
  onSuggestionHover,
  onSuggestionPick,
  onSuggestionMouseDown,
}: HeroSearchFormProps) {
  return (
    <form
      id="tour-search"
      onSubmit={onSubmit}
      className="scheme-light mx-auto mt-16 flex w-full max-w-[100rem] flex-col items-stretch gap-2 rounded-2xl bg-white p-2 shadow-2xl [color-scheme:light] md:mt-24 md:flex-row md:items-center md:gap-2 md:rounded-full lg:mt-32"
    >
      <div className="grid w-full flex-1 grid-cols-1 divide-y divide-gray-100 md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="flex items-center gap-3 px-4 py-3 text-left md:px-6 md:py-3.5">
          <MapPin className="h-5 w-5 shrink-0 text-brand-primary" />
          <div ref={destinationWrapRef} className="relative flex min-w-0 flex-1 flex-col gap-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Destination</p>
            <input
              type="text"
              name="destination"
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
              onFocus={onDestinationFocus}
              onKeyDown={onDestinationKeyDown}
              placeholder="City, state, or country"
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={suggestionsOpen && suggestions.length > 0}
              aria-controls="hero-destination-listbox"
              className="hero-search-field min-h-10 w-full rounded-lg border-0 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-inner shadow-gray-200/80 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/35 md:text-[0.9375rem]"
            />
            {suggestionsOpen && suggestions.length > 0 && (
              <ul
                id="hero-destination-listbox"
                role="listbox"
                className="absolute left-0 right-0 top-full z-[60] mt-1 max-h-[min(50vh,calc(2.5rem*12))] overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 text-left shadow-xl"
              >
                {suggestions.map((name, index) => (
                  <li key={name} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={index === highlightedSuggestionIndex}
                      className={cn(
                        'w-full px-3 py-2.5 text-left text-sm font-medium text-gray-800 hover:bg-gray-50',
                        index === highlightedSuggestionIndex && 'bg-brand-secondary/10 text-gray-900 border-l-4 border-brand-secondary'
                      )}
                      onMouseDown={onSuggestionMouseDown}
                      onMouseEnter={() => onSuggestionHover(index)}
                      onClick={() => onSuggestionPick(name)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-left md:px-6 md:py-3.5">
          <Calendar className="h-5 w-5 shrink-0 text-brand-primary" />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Travel date</p>
            <ModernDatePicker
              value={travelDate}
              onChange={onTravelDateChange}
              minDate={minTravelDate}
              placeholder="Select travel date"
              className="hero-search-field hero-search-date min-h-10 w-full rounded-lg border-0 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-inner shadow-gray-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/35 [color-scheme:light] md:text-[0.9375rem]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-left md:px-6 md:py-3.5">
          <Users className="h-5 w-5 shrink-0 text-brand-primary" />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Travelers</p>
            <select
              name="travelers"
              value={travelers}
              onChange={(e) => onTravelersChange(e.target.value)}
              className="hero-search-field min-h-10 w-full cursor-pointer appearance-none rounded-lg border-0 bg-gray-50 px-3 py-2 pr-9 text-sm font-semibold text-gray-900 shadow-inner shadow-gray-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/35 [color-scheme:light] md:text-[0.9375rem]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1rem 1rem',
              }}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((count) => (
                <option key={count} value={String(count)}>
                  {count} {count === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-secondary px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-brand-secondary/20 transition-transform hover:opacity-90 active:scale-95 md:w-auto md:shrink-0 md:rounded-full md:py-3 md:pl-7 md:pr-8"
      >
        <Search className="w-5 h-5" />
        Find tours
      </button>
    </form>
  );
}
