/*
function compareStrings(str1, str2) {
    return str1.equals(str2);
}

module.exports = compareStrings;
*/

module.exports = {
    format_date: (date) => {
        const postDate = new Date()
        console.log(date)
        return `${postDate.getMonth()+1}/${postDate.getDate()}/${postDate.getFullYear()}`
    },
};
