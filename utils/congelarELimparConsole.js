function congelarELimparConsole(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.clear();
        }, tempo)
    });

}

module.exports = congelarELimparConsole;