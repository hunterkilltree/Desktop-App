import {app, ipcMain, BrowserWindow} from "electron";
import path from "path";

let mainWindow : BrowserWindow;

app.on("ready", createWindows);

function createWindows (): void {
    mainWindow = new BrowserWindow({
        width: 900, height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
        show: false,
    });

    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}