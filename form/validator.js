
//vì xem validator là 1 thư viện độc lập nên tuyệt đối không viết các đoạn mã code hàm xử lý bên ngoài để tránh tình trạng conflict code với mã sau này 

//Đối tượng 'Validator'
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        /*value: inputElement.value ; test func: rulr.test */
        var errorMessage;

        //Lấy ra các rules của selector 
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule & kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        }
        else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage;
    }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement) {

        //khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            //lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            })



            if (isFormValid) {
                //trường hợp submit với javascript

                // var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var enableInputs = formElement.querySelectorAll('[name]')
                var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            };
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value)
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }
                    return values;
                }, {})
                if (typeof options.onSubmit === 'function') {
                    options.onSubmit(formValues)
                }
                //trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input,...)
        options.rules.forEach(function (rule) {
            //Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElement) {
                //xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    // console.log('blur' + rule.selector);
                    validate(inputElement, rule)
                }

                //Xử lý khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        });
        // console.log(selectorRules);

    }
}

/*concept rules
Nguyên tắc của các rules:
1. có lỗi => trả ra message lỗi
2. hợp lê => không trả ra gì(undefined)
*/
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            // return value.trim() ? undefined : message || "Vui lòng nhập trường này" //trim loại bỏ dáu cách đàu và cuối hoặc nếu toàn dấu cách thì loại bỏ hết
            return value ? undefined : message || "Vui lòng nhập trường này"
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || "Trường này phải là email"
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập vào tối thiểu ${min} ký tự`
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'giá trị nhập vào không chính xác'
        }
    };
}