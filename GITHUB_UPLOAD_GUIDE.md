# 上传到GitHub指南

本指南将帮助您将贪吃蛇游戏项目上传到您自己的GitHub仓库。

## 准备工作

1. 确保您已经有一个GitHub账户。如果没有，请在[GitHub官网](https://github.com)注册。
2. 在您的计算机上安装Git。您可以从[Git官网](https://git-scm.com/downloads)下载适合您操作系统的版本。

## 文件结构

确保您的项目包含以下文件：

```
.
├── index.html     # 游戏主页面
├── style.css      # 样式文件
├── script.js      # 游戏逻辑文件
├── images.js      # 图像资源文件
├── README.md      # 项目说明文档
└── preview.png    # 游戏预览图
```

## 上传步骤

### 1. 创建新的GitHub仓库

1. 登录您的GitHub账户。
2. 点击右上角的"+"图标，然后选择"New repository"。
3. 为您的仓库命名，例如"tanchishe-dragon-snake-game"。
4. 添加描述（可选）："一个具有中国风元素的贪吃蛇游戏，蛇身设计成龙形，食物采用传统中国元素设计。"
5. 选择公开（Public）或私有（Private）。
6. 不要勾选"Initialize this repository with a README"，因为我们将上传现有项目。
7. 点击"Create repository"。

### 2. 上传项目到GitHub

打开命令行终端（Command Prompt、Terminal或PowerShell），然后执行以下命令：

```bash
# 进入项目目录
cd 路径/到/您的/贪吃蛇游戏项目

# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始提交：贪吃蛇中国龙游戏"

# 设置主分支名称为main
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/您的用户名/tanchishe-dragon-snake-game.git

# 推送到GitHub
git push -u origin main
```

执行这些命令时，您可能需要输入GitHub用户名和密码或使用个人访问令牌进行身份验证。

### 3. 设置GitHub Pages（可选）

如果您想让您的游戏在线可玩，可以设置GitHub Pages：

1. 在GitHub上打开您的仓库。
2. 点击"Settings"选项卡。
3. 在左侧菜单中，点击"Pages"。
4. 在"Source"部分，选择"main"分支和"/(root)"文件夹。
5. 点击"Save"。

几分钟后，您的游戏将在以下URL可用：
`https://您的用户名.github.io/tanchishe-dragon-snake-game`

## 本地运行

上传完成后，您仍然可以在本地运行游戏：

1. 克隆仓库到本地：
   ```bash
   git clone https://github.com/您的用户名/tanchishe-dragon-snake-game.git
   ```

2. 进入项目目录：
   ```bash
   cd tanchishe-dragon-snake-game
   ```

3. 使用本地服务器运行游戏：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 或使用Node.js (需要安装http-server)
   npx http-server
   ```

4. 在浏览器中打开 `http://localhost:8000`

## 技术栈

- HTML5 Canvas API
- CSS3 (渐变、动画、滤镜效果)
- JavaScript (ES6+)
- 本地存储 (localStorage)

## 游戏特色

- 中国龙形蛇身设计
- 动态食物生成
- 精美视觉效果
- 流畅游戏体验
- 本地存储最高分

## 自定义选项

您可以根据需要修改以下文件：

- `style.css` - 调整游戏外观和样式
- `script.js` - 修改游戏逻辑和规则
- `images.js` - 创建新的食物或蛇身图像