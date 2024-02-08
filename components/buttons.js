export const ButtonPrimary = ({label, type='button', onClick}) => {
    return (
        <button type={type}
                onClick={onClick}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{label}
        </button>
    )
}