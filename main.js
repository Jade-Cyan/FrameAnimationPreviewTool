// main.js
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 1200,        // 设置动画预览的初始宽度
    height: 800,        // 设置动画预览的初始高度
    webPreferences: {
      nodeIntegration: false, // 出于安全考虑，保持关闭
      contextIsolation: true
    }
  })

  // 加载你的网页应用
  win.loadFile('index.html')
}

// 当 Electron 完成初始化后创建窗口
app.whenReady().then(() => {
  createWindow()

  // 对于 macOS：关闭所有窗口后，点击 Dock 图标应重新创建窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 对于 Windows/Linux：关闭所有窗口时退出应用
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})