export const InputField = ({label, inputValue, disabled = false, required = false, type = 'text', parentClass = 'w-full', inputClass = 'w-full', placeholder = '...', onChange}) => {
    return <div className={`${parentClass} mb-2.5`}>
        <div className="capitalize text-sm text-gray-700">{label} {required ? '*' : ''}</div>
        <input readOnly={disabled} onChange={onChange} defaultValue={inputValue} className={`${inputClass} h-9 px-1 ring-0 outline-0 focus:outline-0 focus:ring-0 border focus:border-gray-300 border-gray-300`} type={type} placeholder={placeholder} />
    </div>
}

export const InputBlurField = ({label, inputValue, type = 'text', parentClass = 'w-full', inputClass = 'w-full', placeholder = '...', onBlur}) => {
    return <div className={parentClass}>
        <div className="uppercase text-sm text-gray-700">{label}</div>
        <input onBlur={onBlur} defaultValue={inputValue} className={`${inputClass} ring-0 outline-0 focus:outline-0 focus:ring-0 border focus:border-gray-300 border-gray-300`} type={type} placeholder={placeholder} />
    </div>
}

export const RadioField = ({label, forText, groupName, parentClass = 'w-full', inputValue, inputClass = '', onChange}) => {
    return (<div className={`${parentClass} flex items-center px-2.5 border border-gray-200 rounded dark:border-gray-700`} onChange={onChange}>
        <input id={forText} type="radio" name={groupName} defaultValue={inputValue} className={`${inputClass} w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`} />
        <label htmlFor={forText} className="cursor-pointer w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    </div>);
}