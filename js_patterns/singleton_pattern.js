// Singleton Pattern
// They are manifesting of a Module Patter. It is an immediate anonymous function. Maintain a private reference that nothing from the outside can reference.

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({ name: 'Pat' });
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // it is true because you can only ever have one instance of a singleton
// console.log(instanceA);
