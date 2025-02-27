import React from 'react';

interface SelectFieldProps {
    initialOption: string;
    selected: string;
    selectOptions: string[];
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = (props: SelectFieldProps) => {

    const {
        initialOption = "Filter Results",
        selected,
        selectOptions,
        onFilterChange
    } = props;
    
    return (
        <section>
            <select
                data-testid="filter-continents"
                id="filter-continents"
                value={selected}
                onChange={onFilterChange}
                className="input-base sm:w-64 md:w-64 px-4 py-2 sm:py-3"
            >
                <option value="">{initialOption}</option>
                {selectOptions.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </section>
    );
};

export { SelectField };