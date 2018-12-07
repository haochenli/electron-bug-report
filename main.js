const {app, BrowserWindow, crashReporter} = require('electron')

const { init } = require('@sentry/electron');

let mainWindow

function createWindow () {
  init({
    dsn: 'https://c47aeed94d3647b9bfd208528c7f56a5@sentry.io/1313486',
    // more options...
  });
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})
  throw new Error('I am Error!! HAHAHA')

  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  // function trackEvent(category, action, label, value) {
  //   usr
  //       .event(
  //           "goodbye",
  //           "Event Action",
  //           "…and a label", 
  //           42
  //       )
  //       .send();
  //       console.log('send????')
  //   }
  //   trackEvent();
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  console.log('activation?', process.type)
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
