function compareStrings(str1, str2) {
    return str1.equals(str2);
}

module.exports = compareStrings;

/*
module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },

}
*/