// получилась жуткая портянка, но писать красивые и лаконичные функции у меня пока не получается, пока главное, что функция работает

function pow(a, b) {
    let result = 1;
    if (b == 0) {
        return result;
    } else if (a == 0) {
        return result = 0;
    } else if (a < 0 && b > 0) {
        for (let i = 1; i <= b; i++) {
            result = result * a;
        }
    } else if (a > 0 && b < 0) {
        for (let i = b; i < 0; i++) {
            result = result / a;
        }
    } else {
        for (let i = 1; i <= b; i++) {
            result = result * a;
        }
    }

    return result;
}

module.exports = {
    pow
}
