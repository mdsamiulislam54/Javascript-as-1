

const describeValue = (value) => {
    if (value === undefined) {
        return `"undefined | ${value ? "truthy" : "falsy"}"`;
    }
    switch (typeof value) {
        case "string":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
        case "number":
            return `"${typeof value} | ${value ? "truthy" : "falsy"}"`;
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

const getDayType  = (day) => {
    switch (day) {
        case "Monday":
            return "Working Day";
        case "Tuesday":
            return "Working Day";
        case "Wednesday":
            return "Working Day";
        case "Thursday":
            return "Working Day";
        case "Friday":
            return "Weekday";
        case "Saturday":
            return "Weekend";
        case "Sunday":
            return "Working Day"; 
        default:
            return "Invalid day";
    }
}

