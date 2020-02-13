const toEnglish = number => {
    return number.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (c) => {
        return c.charCodeAt(0) & 0xf;
    });
};

module.exports = toEnglish;