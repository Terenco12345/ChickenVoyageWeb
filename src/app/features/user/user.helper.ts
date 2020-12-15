//////////////////////////////////////
/// HELPER METHODS FOR USER MODULE ///
//////////////////////////////////////

const displayNameRegExp = new RegExp(/^[a-zA-Z0-9]{4,20}$/)
const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const passwordRegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

/**
 * Helper function to check if display name has:
 * - Alphanumeric characters allowed [a-zA-Z0-9]
 * - Between 4 and 20 characters
 * @param displayName Name to check
 * @returns Whether the email is valid
 */
export function checkDisplayNameFormat(displayName: string): boolean{
    return displayNameRegExp.test(displayName);
}

/**
 * Helper function to check if an email string follows email structure,
 * i.e. xxxx@xxxxx.xxx
 * @param email Email to check
 * @returns Whether the email is valid
 */
export function checkEmailFormat(email: string): boolean{
    return emailRegExp.test(email);
}

/**
 * Helper function to check if a password string has:
 * - Minimum eight characters
 * - At least one letter
 * - At least one number
 * @param password Password to check
 * @returns Whether the password is valid
 */
export function checkPasswordFormat(password: string): boolean{
    return passwordRegExp.test(password);
}