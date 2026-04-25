import React, { forwardRef, useState } from 'react';
import DatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDateForInput, parseInputDate } from '../../utils/date';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ModernDatePickerProps = {
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  className?: string;
  placeholder?: string;
};

const PickerInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      readOnly
      className={className}
    />
  ),
);

PickerInput.displayName = 'PickerInput';

/**
 * A customized wrapper around react-datepicker with a premium UI
 * consistent with the Shashwat brand guidelines.
 */
export default function ModernDatePicker({
  value,
  onChange,
  minDate,
  className,
  placeholder,
}: ModernDatePickerProps) {
  const [headerPicker, setHeaderPicker] = useState<'year' | 'month' | null>(null);

  const minDateValue = parseInputDate(minDate);
  const selectedDate = parseInputDate(value);
  const currentYear = new Date().getFullYear();
  const startYear = minDateValue?.getFullYear() ?? currentYear;
  const endYear = Math.max(
    startYear + 15,
    selectedDate?.getFullYear() ?? currentYear + 5,
    currentYear + 5,
  );
  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
  const months = Array.from({ length: 12 }, (_, index) =>
    new Date(2026, index, 1).toLocaleString('en-US', { month: 'long' }),
  );

  const renderHeader = ({
    monthDate,
    changeMonth,
    changeYear,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <div className="modern-datepicker-header">
        <div className="flex items-center justify-between gap-2 px-3 pb-2">
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-100 disabled:cursor-default disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setHeaderPicker((prev) => (prev ? null : 'year'))}
            className="rounded-lg px-3 py-1.5 text-sm font-black text-gray-900 transition hover:bg-gray-100"
          >
            {monthDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </button>

          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-100 disabled:cursor-default disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {headerPicker && (
          <div className="modern-datepicker-switcher">
            <p className="modern-datepicker-switcher-title">
              {headerPicker === 'year' ? 'Select year' : 'Select month'}
            </p>

            {headerPicker === 'year' ? (
              <div className="modern-datepicker-switcher-grid modern-datepicker-switcher-grid-years">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => {
                      changeYear(year);
                      setHeaderPicker('month');
                    }}
                    className={`modern-datepicker-switcher-item ${
                      monthDate.getFullYear() === year ? 'is-active' : ''
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            ) : (
              <div className="modern-datepicker-switcher-grid modern-datepicker-switcher-grid-months">
                {months.map((month, monthIndex) => (
                  <button
                    key={month}
                    type="button"
                    onClick={() => {
                      changeMonth(monthIndex);
                      setHeaderPicker(null);
                    }}
                    className={`modern-datepicker-switcher-item ${
                      monthDate.getMonth() === monthIndex ? 'is-active' : ''
                    }`}
                  >
                    {month.slice(0, 3)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        setHeaderPicker(null);
        onChange(date ? formatDateForInput(date) : '');
      }}
      onCalendarClose={() => setHeaderPicker(null)}
      minDate={minDateValue}
      dateFormat="dd-MM-yyyy"
      monthsShown={1}
      showPopperArrow={false}
      portalId="root"
      popperPlacement="bottom-start"
      placeholderText={placeholder}
      className={className}
      customInput={<PickerInput />}
      calendarClassName="modern-datepicker-calendar"
      popperClassName="modern-datepicker-popper"
      renderCustomHeader={renderHeader}
    />
  );
}
