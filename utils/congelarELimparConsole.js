function congelarELimparConsole() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.clear();
        }, 1000)
    });

}

module.exports = congelarELimparConsole;