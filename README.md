# 贪吃蛇 - 中国龙蛇游戏 (Snake - Chinese Dragon Snake Game)

![游戏预览](https://raw.githubusercontent.com/linmister/tanchishe-dragon-snake-game/main/preview.png)

一个具有中国风元素的贪吃蛇游戏，蛇身设计成龙形，食物采用传统中国元素设计。

## 游戏特色 (Game Features)

- **中国龙形蛇身设计**：蛇头、蛇身和蛇尾都采用中国龙的设计元素
- **动态食物生成**：包含国风果子、蟠桃和寿桃三种不同食物
- **精美视觉效果**：渐变背景、动画效果和半透明界面元素
- **流畅游戏体验**：随着得分增加，游戏速度会逐渐提升
- **本地存储**：自动保存最高分记录

## 技术栈 (Tech Stack)

- HTML5 Canvas API
- CSS3 (渐变、动画、滤镜效果)
- JavaScript (ES6+)
- 本地存储 (localStorage)

## 文件结构 (File Structure)

```
.
├── index.html     # 游戏主页面
├── style.css      # 样式文件
├── script.js      # 游戏逻辑文件
├── images.js      # 图像资源文件
├── README.md      # 项目说明文档
└── preview.png    # 游戏预览图
```

## 运行游戏 (Running the Game)

### 在线游玩 (Play Online)
访问 GitHub Pages 链接: [https://linmister.github.io/tanchishe-dragon-snake-game](https://linmister.github.io/tanchishe-dragon-snake-game)

### 本地运行 (Local Development)
1. 克隆仓库到本地:
   ```bash
   git clone https://github.com/linmister/tanchishe-dragon-snake-game.git
   ```
2. 进入项目目录:
   ```bash
   cd tanchishe-dragon-snake-game
   ```
3. 启动本地服务器:
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 或使用Node.js (需要安装http-server)
   npx http-server
   
   # 或使用任何其他本地服务器工具
   ```
4. 在浏览器中打开 `http://localhost:8000`

## 游戏操作 (Game Controls)

- **方向键**：控制蛇的移动方向
- **空格键** 或 **P键**：暂停/继续游戏
- **开始游戏按钮**：开始新游戏
- **暂停按钮**：暂停当前游戏
- **重新开始按钮**：重置游戏

## 游戏规则 (Game Rules)

1. 控制龙蛇吃食物，每吃一个食物得分增加10分
2. 龙蛇身体会随着吃到的食物而增长
3. 每得50分会增加游戏速度
4. 撞到墙壁或自己的身体会导致游戏结束
5. 游戏会自动保存最高分记录

## 自定义设置 (Customization)

您可以根据需要修改以下文件：

- `style.css` - 调整游戏外观和样式
- `script.js` - 修改游戏逻辑和规则
- `images.js` - 创建新的食物或蛇身图像

## 浏览器兼容性 (Browser Compatibility)

- Chrome 50+
- Firefox 50+
- Safari 10+
- Edge 15+

## 上传到GitHub (Upload to GitHub)

如果您想将此项目上传到您的GitHub仓库，请参考 [GITHUB_UPLOAD_GUIDE.md](GITHUB_UPLOAD_GUIDE.md) 文件。

## 许可证 (License)

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 作者 (Author)

[linmister](https://github.com/linmister)