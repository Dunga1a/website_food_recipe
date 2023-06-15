export const convertToTitleCase = (str) => {
    // Chuyển đổi chữ cái đầu tiên thành chữ in hoa
    const conversions = {
        a: "áàảãạăắằẳẵặâấầẩẫậ",
        o: "óòỏõọôốồổỗộơớờởỡợ",
        e: "éèẻẽẹêếềểễệ",
        u: "úùủũụưứừửữự",
        i: "íìỉĩị",
        y: "ýỳỷỹỵ",
        d: "đ",
    };
    // Chia chuỗi thành mảng các từ
    const words = str.split("-");
    const convertedWords = words.map((word) => {
        const lowercase = word.toLowerCase();
        const firstLetter = lowercase.charAt(0);
        const rest = lowercase.slice(1);
        const convertedFirstLetter =
            conversions[firstLetter] || firstLetter.toUpperCase();
        return convertedFirstLetter + rest;
    });
    return convertedWords.join(" ");
};
