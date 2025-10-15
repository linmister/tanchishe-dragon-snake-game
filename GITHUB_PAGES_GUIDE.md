# GitHub Pages 部署指南

本指南将帮助您将贪吃蛇游戏部署到GitHub Pages，使其可以在线访问。

## 什么是GitHub Pages？

GitHub Pages是GitHub提供的一项免费服务，允许您直接从您的GitHub仓库托管静态网站。这对于展示HTML、CSS和JavaScript项目（如我们的贪吃蛇游戏）非常理想。

## 部署步骤

### 1. 确保您的项目已上传到GitHub

首先，确保您已经将贪吃蛇游戏项目上传到GitHub仓库。如果尚未上传，请参考[GITHUB_UPLOAD_GUIDE.md](GITHUB_UPLOAD_GUIDE.md)文件中的说明。

### 2. 配置GitHub Pages

1. 在GitHub上打开您的仓库页面。
2. 点击页面顶部的"Settings"选项卡。
3. 在左侧菜单中，点击"Pages"。
4. 在"Source"部分，从下拉菜单中选择"main"分支（或您的主分支名称）。
5. 确保根目录（"/(root)"）被选中。
6. 点击"Save"按钮。

### 3. 等待部署完成

保存设置后，GitHub将开始构建您的网站。这个过程通常需要几分钟时间。

一旦部署完成，您将在GitHub Pages设置页面上看到一条消息，显示您的网站已发布，并提供访问链接，通常格式为：

```
https://您的用户名.github.io/tanchishe-dragon-snake-game/
```

### 4. 访问您的在线游戏

点击提供的链接，您应该能够看到贪吃蛇游戏在线运行。现在，您可以与朋友分享这个链接，让他们也能玩您的游戏！

## 更新您的游戏

当您对游戏进行更改并推送到GitHub仓库时，GitHub Pages将自动更新您的在线版本。更新过程可能需要几分钟才能完成。

## 自定义域名（可选）

如果您拥有自己的域名，您可以将其用于您的GitHub Pages网站：

1. 在GitHub Pages设置页面的"Custom domain"部分，输入您的域名。
2. 点击"Save"。
3. 按照GitHub提供的说明，在您的域名注册商处更新DNS设置。

## 故障排除

如果您的网站没有正确显示：

1. 确保您的仓库中包含`index.html`文件在根目录。
2. 检查浏览器控制台是否有任何错误。
3. 确保所有资源（CSS、JavaScript文件等）都能正确加载。
4. 验证文件路径是否正确（GitHub Pages区分大小写）。

## 结论

现在您的贪吃蛇游戏已经部署到GitHub Pages，任何人都可以通过互联网访问和玩这个游戏。这是展示您的项目和与他人分享的绝佳方式！

如果您对GitHub Pages有任何疑问，请参考[GitHub Pages官方文档](https://docs.github.com/en/pages)。