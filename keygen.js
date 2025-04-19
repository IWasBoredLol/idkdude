// keygen.js - example JavaScript code for key generation/verification

// Example key verification logic
function verifyKey(userKey) {
    const validKeys = ['STARROT_9183Y52945H7', 'STARROT_9183EFGH5678', 'STARROT_9183IJKL91011'];  // List of valid keys

    if (validKeys.includes(userKey)) {
        return "valid";
    } else {
        return "invalid";
    }
}

// This function will be triggered when the script is accessed
if (typeof window === 'undefined') {
    // Node.js environment (Roblox script will use this)
    module.exports = { verifyKey };
} else {
    // Browser environment (you could display something here if needed)
    console.log("Keygen.js loaded.");
}
