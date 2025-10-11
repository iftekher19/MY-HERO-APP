// Get all installed apps
export const loadInstalled = () => {
    try {
        const data = localStorage.getItem("installedApps");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error(err);
        return [];
    }
};

// Save a new app
export const addInstall = (app) => {
    try {
        const installed = loadInstalled();
        const exists = installed.some((a) => a.id === app.id);
        if (exists) {
            alert("Already installed");
            return;
        }
        const updated = [...installed, app];
        localStorage.setItem("installedApps", JSON.stringify(updated));
    } catch (err) {
        console.error(err);
    }
};

// Remove an app by id
export const removeInstall = (id) => {
    try {
        const installed = loadInstalled();
        const updated = installed.filter((a) => a.id !== id);
        localStorage.setItem("installedApps", JSON.stringify(updated));
    } catch (err) {
        console.error(err);
    }
};