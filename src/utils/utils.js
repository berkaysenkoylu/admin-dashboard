export const firstLetterUpper = (string) => {
    return ((string || '').replace(/-/g, ' ').split(' ').map(function (word) {
        return (((word[0] || '').toUpperCase() + word.slice(1))).trim();
    }).join(' ')).trim();
}