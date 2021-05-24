const cutString = (string, maxLength) => (string.length > maxLength ? `${string.slice(0, maxLength)}...` : string)

export default cutString