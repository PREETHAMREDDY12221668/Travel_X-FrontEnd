import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator=(PasswordControlName:string,ConfirmPasswordControlName:string)=>{
    const validator=(form :AbstractControl)=>{
        const PasswordControl=form.get(PasswordControlName);
        const confirmPasswordControl=form.get(ConfirmPasswordControlName);

        if(!PasswordControl|| !confirmPasswordControl)return;
        if(PasswordControl.value!==confirmPasswordControl.value){
            confirmPasswordControl.setErrors({notmatch:true});
        } else{
            const errors = PasswordControl.errors;
            if(!errors) return;
            delete errors['notmatch'];
            confirmPasswordControl.setErrors(errors);
        }
    }
    return validator;
    
}