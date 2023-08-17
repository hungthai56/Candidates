export default class Validator {
    static genValidate = (validate, fieldName) => {
        let _validate = {};
        validate.forEach((e, i) => {
            _validate[`${fieldName}_${i}`] = e;
        });
        return _validate;
    };
    static required(value) {
        return value?.toString()?.trim() ? undefined : '* Không được để trống';
    }
    static requiredSwitch(value) {
        return value == true ? undefined : '* Không được để trống';
    }

    static money = (value) =>
        !/^[0-9.]*$/i.test(value) && value != null
            ? '* Giá trị không đúng định dạng'
            : undefined;
    static maxLength = (max) => (value) =>
        value && value.length > max ? `* Không quá ${max} kí tự` : undefined;
    static minLength = (min) => (value) =>
        value && value.length < min ? `* Không ít hơn ${min} kí tự` : undefined;
    static checkChar = (value) => {
        // return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i.test(value) && value ? "Không chưa kí tự đặc biệt" : undefined
    };

    static checkEmotion = (value) => {
        return value != null && /^\+\d* ?\d*$/i.test(value)
            ? '* Không chứa kí tự đặc biệt'
            : undefined;
    };
    static checkEmoji = (value) => {
        return value != null && /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/i.test(value)
            ? '* Dữ liệu không hợp lệ'
            : undefined;
    };
    static maxDate = (value) => {
        if (new Date(value) > new Date()) {
            return '* Ngày không được lớn hơn ngày hiện tại';
        }
        return undefined;
    };
    static minDate = (value) => {
        if (new Date(value) < new Date()) {
            return '* Ngày không được nhỏ hơn ngày hiện tại';
        }
        return undefined;
    };
    static CheckedDate = ((dateCheck, type, isStart = false) => (value) => {
        if (value && dateCheck) {
            switch (type) {
                case 1:
                    if (value && new Date(value) > new Date(dateCheck)) {
                        return `* Thời gian ${isStart ? 'bắt đầu' : 'từ'} phải nhỏ hơn hoặc bằng thời gian ${isStart ? 'kết thúc' : 'đến'}`
                    }
                    break;
                case 2:
                    if (value && new Date(value) < new Date(dateCheck)) {
                        return `* Thời gian ${isStart ? 'kết thúc' : 'đến'} phải lớn hơn hoặc bằng thời gian ${isStart ? 'bắt đầu' : 'từ'}`
                    }
                    break;
                default:
                    return undefined;
            }
        } else {
            return undefined;
        }
    });
    static CheckedOrder = ((price, type) => (value) => {
        if (value && price) {
            switch (type) {
                case 1:
                    if (value && parseInt(value?.toString().split('.').join('')) > price) {
                        return `* Hoá đơn từ phải nhỏ hơn hoặc bằng hoá đơn đến`
                    }
                    break;
                case 2:
                    if (value && parseInt(value?.toString().split('.').join('')) < price) {
                        return `* Hoá đơn đến phải lớn hơn hoặc bằng hoá đơn từ`
                    }
                    break;
                default:
                    return undefined;
            }
        } else {
            return undefined;
        }
    });

    static checkPriceMaxReduce = (price) => (value) => {
        if (
            value &&
            price &&
            parseInt(value?.toString().split(',').join('')) >
            parseInt(price?.toString().split(',').join(''))
        ) {
            return '* Không thể tìm kiếm sản phẩm giá từ lớn hơn giá đến';
        }
        return undefined;
    };
    static checkPriceMaxIncrea = (price) => (value) => {
        if (
            value &&
            price &&
            parseInt(value?.toString().split(',').join('')) <
            parseInt(price?.toString().split(',').join(''))
        ) {
            return '* Không thể tìm kiếm sản phẩm giá đến nhỏ hơn giá từ';
        }
        return undefined;
    };
    static checkNumberFrom = (number, message) => (value) => {
        if (
            value &&
            number &&
            parseInt(value?.toString().split('.').join('')) >=
            parseInt(number?.toString().split(',').join(''))
        ) {
            return message ? message : '* Giá trị từ phải nhỏ hơn giá trị đến';
        }
        return undefined;
    };
    static checkNumberTo = (number) => (value) => {
        if (
            value &&
            number &&
            parseInt(value?.toString().split('.').join('')) <=
            parseInt(number?.toString().split(',').join(''))
        ) {
            return '* Giá trị đến phải lớn hơn giá trị từ';
        }
        return undefined;
    };

    static checkPrice = (value) => {
        return value && value < 0
            ? '* Giá tiền phải lớn hơn hoặc bằng 0'
            : undefined;
    };
    static checkSymbols = (value) => {
        return value && /[!$%^&*()_+|~=`{}[\]:/;<>?@#]/i.test(value)
            ? '* Không chưa kí tự đặc biệt'
            : undefined;
    };
    static checkCharRegex = (value) => {
        return value &&
            !/^[/\s/A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9_.,+-]+$/i.test(
                value,
            )
            ? '* Không đúng định dạng'
            : undefined;
    };

    /* eslint-disable no-useless-escape */
    static checkFormatDate = (value) => {
        return value && !/\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/i.test(value)
            ? '* Không đúng định dạng'
            : undefined;
    };
    static phone = (value) =>
        value &&
            !/(090|093|070|072|079|077|076|078|089|088|091|094|083|084|085|081|082|032|033|034|035|036|037|038|039|086|096|097|098|099|059|092|052|056|058)+([0-9]{7})\b/i.test(
                value,
            )
            ? '* Số điện thoại không hợp lệ'
            : undefined;

    static requiredFiled = (value) => {
        return value && value?.ListFile?.acceptedFiles?.length > 0 ? undefined : '* Không được để trống'
    }
    static checkValueFrom = (number, message) => (value) => {
        if (
            value &&
            number &&
            parseInt(value?.toString().split('.').join('')) >
            parseInt(number?.toString().split(',').join(''))
        ) {
            return message ? message : '* Giá trị tối thiểu phải nhỏ hơn hoặc bằng Giá trị tối đa';
        }
        return undefined;
    };
    static checkValueTo = (number, message) => (value) => {
        if (
            value &&
            number &&
            parseInt(value?.toString().split('.').join('')) <
            parseInt(number?.toString().split(',').join(''))
        ) {
            return message ? message : '* Giá trị tối đa phải lớn hơn hoặc bằng Giá trị tối thiểu';
        }
        return undefined;
    };
    static checkEmotionV2 = (value) => {
        return value != null && /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(value)
            ? '* Không chứa kí tự đặc biệt'
            : undefined;
    };
    static EnterCodeVoucher = (value) => {
        let arr = value?.split(",");
        let isError = '';
        let isContinue = true;
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].length < 5 || arr[index].length > 20 && isContinue) {
                isError = `* Mã ${index + 1} phải có từ 5 đến 20 kí tự`;
                isContinue = false;
            }
            if (
                !/^[a-zA-Z0-9]*$/gs.test(
                    arr[index],
                ) && isContinue
            ) {
                isError = `* Mã ${index + 1} không hợp lệ`;
                isContinue = false;
            }

            if (!isContinue) {
                break;
            }
        }

        for (let index = 0; index < arr.length - 1; index++) {
            let isDuplicate = arr?.findIndex((x, i) => x == arr[index] && i != index)
            if (isDuplicate != -1) {
                isContinue = false;
                isError = `* Mã voucher ${index + 1} trùng lặp`
            }
            if (!isContinue) {
                break;
            }
        }
        if (arr.length >= 10000) {
            isError = '* Số lượng mã không hợp lệ'
        }

        if (isError) {
            return isError;
        }
        return undefined;
    }

    static requiredPricePercent = (value) => {
        return value && value?.price > 0 ? undefined : '* Không được để trống';
    }

    static checkPricePromotion = (number) => (value) => {
        if (
            value &&
            number &&
            parseInt(value?.toString().split('.').join('')) >
            parseInt(number?.toString().split(',').join(''))
        ) {
            return '* Giá khuyến mãi nhỏ hơn giá bán';
        }
        return undefined;
    }
    static url = (value) => {
        return value && !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(value)
            ? '* Không đúng định dạng' : undefined
    }
}
