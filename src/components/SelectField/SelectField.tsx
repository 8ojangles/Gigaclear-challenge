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
                className="block w-full sm:w-64 md:w-64 px-4 py-2 sm:py-3 text-md text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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