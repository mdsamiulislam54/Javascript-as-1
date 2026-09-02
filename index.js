

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

const getDayType = (day) => {
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

const validateUsername = (username) => {
    if (typeof username !== "string") {
        return "Invalid username must be a string";
    }
    if (username.length < 4) {
        return "Too short";
    } else if (username.includes(" ")) {
        return "No spaces Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reverse Word";
    }
    return "Available";

}

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
    let fare = 50;
    if (distance <= 0) {
        return "Invalid distance";
    }
    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare *= 1.2;
    }

    return fare;

}

