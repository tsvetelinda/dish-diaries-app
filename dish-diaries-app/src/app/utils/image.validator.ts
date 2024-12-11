import { ValidatorFn } from "@angular/forms";

export function imageValidator(): ValidatorFn {
    const regExp = new RegExp(`^https?:\/\/.+$`);

    return (control => {
        const isInvalid = control.value === '' || regExp.test(control.value);

        return isInvalid ? null : {imageValidator: true};
    });
}