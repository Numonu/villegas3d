const getNameResume = (name : string) => {
    const names = name.split(" ");
    const firstLetter = names[0][0].toUpperCase();
    const secondLetter = names[1][0].toUpperCase();
    return firstLetter + secondLetter;
}
export default getNameResume;