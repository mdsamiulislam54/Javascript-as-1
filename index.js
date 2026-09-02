// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

const describeValue = (value) => {
    if (value === undefined) {
        return `"undefined | ${value ? "truthy" : "falsy"}"`;
    }
    switch (typeof value) {
        case "string":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
        case "number":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}`;
        case "boolean":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
        case "object":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
        case "function":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
        default:
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
    }
}

