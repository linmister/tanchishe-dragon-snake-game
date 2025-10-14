# 贪吃蛇游戏上传到GitHub指南

## 项目概述
这是一个使用HTML5、CSS3和JavaScript开发的贪吃蛇游戏，具有中国风元素设计。游戏包含动态生成的食物图像（国风果子、蟠桃、寿桃）和龙形蛇身设计。

## 文件结构
```
.
├── index.html     # 游戏主页面
├── style.css      # 样式文件
├── script.js      # 游戏逻辑文件
├── images.js      # 图像资源文件
├── README.md      # 项目说明文档
├── package.json   # 项目配置文件
└── .gitignore     # Git忽略文件
```

## 上传到GitHub的步骤

### 1. 在GitHub上创建新仓库
1. 登录您的GitHub账户
2. 点击右上角的"+"号，选择"New repository"
3. 输入仓库名称（例如：tanchishe-game）
4. 选择设为公开（Public）或私有（Private）
5. 不要初始化README、.gitignore或license
6. 点击"Create repository"

### 2. 克隆仓库到本地
1. 打开终端或命令提示符
2. 使用以下命令克隆仓库（将`yourusername`替换为您的GitHub用户名）：
   ```bash
   git clone https://github.com/yourusername/tanchishe-game.git
   ```
3. 进入仓库目录：
   ```bash
   cd tanchishe-game
   ```

### 3. 复制游戏文件
将以下文件从项目目录复制到您刚克隆的仓库目录中：
- index.html
- style.css
- script.js
- images.js
- README.md
- package.json
- .gitignore

### 4. 提交并推送代码
在仓库目录中执行以下Git命令：
```bash
# 添加所有文件到Git
git add .

# 提交更改
git commit -m "Initial commit: 贪吃蛇游戏"

# 推送到GitHub
git push origin main
```

### 5. 验证上传
1. 刷新GitHub仓库页面
2. 确认所有文件都已成功上传
3. 检查README.md是否正确渲染

## 本地运行游戏
在项目根目录下执行以下命令启动本地服务器：
```bash
python -m http.server 8000
```
然后在浏览器中访问 `http://localhost:8000` 即可开始游戏。

## 技术栈
- HTML5 Canvas API
- CSS3
- JavaScript (ES6+)
- 动态图像生成技术

## 游戏特性
- 经典贪吃蛇玩法
- 中国风视觉设计
- 动态生成的食物图像
- 龙形蛇身设计
- 得分显示和速度递增
- 暂停/继续功能
- 响应式键盘控制

## 自定义设置
您可以根据需要修改以下文件：
- `style.css` - 调整游戏外观和样式
- `script.js` - 修改游戏逻辑和规则
- `images.js` - 创建新的食物或蛇身图像