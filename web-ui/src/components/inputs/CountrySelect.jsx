import Select from 'react-select'
import useCountries from "../../hooks/useCountries";
import "./input.css"

export const CountrySelectValue = {
    flag: '',
    label:'',
    region: '',
    value: ''
}


const CountrySelect = ({
     value,
     onChange
}) => {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value)}
                formatOptionLabel={(option) => (
                    <div className="country-input">
                        <div>{option.flag}</div>
                        <div>
                            {option.label},
                            <span className="region">
                                {option.region}
                            </span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => 'p-3 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
}

export default CountrySelect;
