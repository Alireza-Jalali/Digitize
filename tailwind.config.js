/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["YekanBakh-Regular"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
};

