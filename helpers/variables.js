module.exports = {
    errorMessage: 'Server down',
    registerWelcome: function (firstName) {
        return `Welcome ${firstName}!`
    },
    loginWelcome: function (firstName) {
        return `Welcome back ${firstName}`
    },
    profileUpdated: 'User data successfully updated',
    profileDeleted: 'User data successfully deleted',
    alreadyInUse: 'Email already in use',
    invalid: 'You entered wrong info',
    missingFields: 'You are missing some required fields',
    noData: 'You left all fields empty',
    tokenInvalid: 'Token Validation failed',
    supplyToken: 'Please supply token',
    invalidEmail: 'Invalid email format',
    noAccess: 'You are unauthorized to access or modify this information',
    newEntry: 'New entry successfully created',
    updatedEntry: 'Entry successfully updated', 
    entryRemoved: function (value) {
        return `${value} has been succefully deleted`
    },
    mailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}