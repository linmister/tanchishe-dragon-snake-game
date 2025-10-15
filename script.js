// 获取游戏元素
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');

// 游戏变量
let snake = [];
let food = {};
let direction = 'right';
let nextDirection = 'right';
let gameRunning = false;
let gameLoop;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameSpeed = 150; // 初始游戏速度（毫秒）
let gridSize = 20; // 网格大小
let cellSize = canvas.width / gridSize; // 单元格大小

// 初始化游戏
function initGame() {
    // 清除游戏结束界面（如果存在）
    const gameOverElement = document.querySelector('.game-over');
    if (gameOverElement) gameOverElement.remove();
    
    // 初始化蛇
    snake = [
        {x: 10, y: 10},
        {x: 9, y: 10},
        {x: 8, y: 10}
    ];
    
    // 初始化方向
    direction = 'right';
    nextDirection = 'right';
    
    // 初始化分数
    score = 0;
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    
    // 初始化游戏状态
    gameRunning = false;
    gameSpeed = 150;
    
    // 生成食物
    generateFood();
    
    // 绘制游戏
    drawGame();
}

// 生成食物
function generateFood() {
    // 随机生成食物位置
    let validPosition = false;
    while (!validPosition) {
        food = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
        
        // 确保食物不会生成在蛇身上
        validPosition = true;
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === food.x && snake[i].y === food.y) {
                validPosition = false;
                break;
            }
        }
    }
}

// 绘制游戏
function drawGame() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制地图背景
    drawMap();
    
    // 绘制蛇
    drawSnake();
    
    // 绘制食物
    drawFood();
    
    // 绘制分数
    drawScore();
}

// 绘制地图
function drawMap() {
    // 绘制网格背景
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格线
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    
    // 绘制垂直线
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }
    
    // 绘制边框
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// 绘制蛇
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        const x = snake[i].x * cellSize;
        const y = snake[i].y * cellSize;
        
        if (i === 0) {
            // 绘制蛇头
            drawDragonHead(x, y);
        } else if (i === snake.length - 1) {
            // 绘制蛇尾
            drawDragonTail(x, y);
        } else {
            // 绘制蛇身
            drawDragonBody(x, y);
        }
    }
}

// 绘制食物
function drawFood() {
    const x = food.x * cellSize;
    const y = food.y * cellSize;
    
    // 创建canvas来绘制食物
    const foodCanvas = document.createElement('canvas');
    foodCanvas.width = cellSize;
    foodCanvas.height = cellSize;
    const foodCtx = foodCanvas.getContext('2d');
    
    // 绘制食物（红色果实）
    const gradient = foodCtx.createRadialGradient(
        cellSize/2, cellSize/2, 1,
        cellSize/2, cellSize/2, cellSize/2 - 2
    );
    gradient.addColorStop(0, '#ff5555');
    gradient.addColorStop(1, '#cc0000');
    
    foodCtx.fillStyle = gradient;
    foodCtx.beginPath();
    foodCtx.arc(cellSize/2, cellSize/2, cellSize/2 - 2, 0, Math.PI * 2);
    foodCtx.fill();
    
    // 绘制高光
    foodCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    foodCtx.beginPath();
    foodCtx.arc(cellSize/3, cellSize/3, cellSize/6, 0, Math.PI * 2);
    foodCtx.fill();
    
    // 绘制叶子
    foodCtx.fillStyle = '#00aa00';
    foodCtx.beginPath();
    foodCtx.ellipse(cellSize/2, 3, cellSize/4, cellSize/8, 0, 0, Math.PI * 2);
    foodCtx.fill();
    
    // 将绘制好的食物画到游戏画布上
    ctx.drawImage(foodCanvas, x, y);
}

// 绘制分数
function drawScore() {
    // 分数已经在HTML中显示，这里可以添加额外的视觉效果
}

// 更新游戏状态
function updateGame() {
    if (!gameRunning) return;
    
    // 更新方向
    direction = nextDirection;
    
    // 计算新的蛇头位置
    const head = {x: snake[0].x, y: snake[0].y};
    
    switch(direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    
    // 检查是否撞墙
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        gameOver();
        return;
    }
    
    // 检查是否撞到自己
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            gameOver();
            return;
        }
    }
    
    // 将新头部添加到蛇身上
    snake.unshift(head);
    
    // 检查是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        // 增加分数
        score += 10;
        scoreElement.textContent = score;
        
        // 每吃5个食物增加速度
        if (score % 50 === 0 && gameSpeed > 50) {
            gameSpeed -= 10;
        }
        
        // 生成新食物
        generateFood();
    } else {
        // 移除尾部（如果没有吃到食物）
        snake.pop();
    }
    
    // 重绘游戏
    drawGame();
}

// 游戏结束
function gameOver() {
    gameRunning = false;
    clearInterval(gameLoop);
    
    // 更新最高分
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        highScoreElement.textContent = highScore;
    }
    
    // 显示游戏结束界面
    const gameOverElement = document.createElement('div');
    gameOverElement.className = 'game-over';
    gameOverElement.innerHTML = `
        <h2>游戏结束</h2>
        <p>最终得分: ${score}</p>
        <p>最高分: ${highScore}</p>
        <button class="restart-btn" onclick="resetGame()">重新开始</button>
    `;
    document.querySelector('.game-container').appendChild(gameOverElement);
}

// 开始游戏
function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        gameLoop = setInterval(updateGame, gameSpeed);
        
        // 移除暂停指示器（如果存在）
        const pauseIndicator = document.querySelector('.pause-indicator');
        if (pauseIndicator) pauseIndicator.remove();
    }
}

// 暂停游戏
function pauseGame() {
    gameRunning = !gameRunning;
    
    if (gameRunning) {
        gameLoop = setInterval(updateGame, gameSpeed);
        // 移除暂停指示器
        const pauseIndicator = document.querySelector('.pause-indicator');
        if (pauseIndicator) pauseIndicator.remove();
    } else {
        clearInterval(gameLoop);
        // 显示暂停指示器
        const pauseIndicator = document.createElement('div');
        pauseIndicator.className = 'pause-indicator';
        pauseIndicator.textContent = '游戏暂停';
        document.querySelector('.game-container').appendChild(pauseIndicator);
    }
}

// 重置游戏
function resetGame() {
    clearInterval(gameLoop);
    initGame();
}

// 处理键盘输入
function handleKeyPress(event) {
    switch(event.key) {
        case 'ArrowUp':
            if (direction !== 'down') nextDirection = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') nextDirection = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') nextDirection = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') nextDirection = 'right';
            break;
        case ' ':
        case 'p':
        case 'P':
            pauseGame();
            break;
    }
}

// 事件监听器
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
resetBtn.addEventListener('click', resetGame);
document.addEventListener('keydown', handleKeyPress);

// 初始化游戏
initGame();

// 龙头绘制函数
function drawDragonHead(x, y) {
    // 创建canvas来绘制龙头
    const headCanvas = document.createElement('canvas');
    headCanvas.width = 20;
    headCanvas.height = 20;
    const headCtx = headCanvas.getContext('2d');
    
    // 绘制龙头主体（金色）
    const gradient = headCtx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#FFD700'); // 金色
    gradient.addColorStop(1, '#FF8C00'); // 深橙色
    
    headCtx.fillStyle = gradient;
    headCtx.beginPath();
    headCtx.ellipse(10, 10, 8, 6, 0, 0, Math.PI * 2);
    headCtx.fill();
    
    // 绘制龙眼
    headCtx.fillStyle = '#000';
    headCtx.beginPath();
    headCtx.arc(13, 8, 2, 0, Math.PI * 2);
    headCtx.fill();
    
    headCtx.fillStyle = '#FFF';
    headCtx.beginPath();
    headCtx.arc(13.5, 7.5, 0.5, 0, Math.PI * 2);
    headCtx.fill();
    
    // 绘制龙嘴
    headCtx.strokeStyle = '#8B4513';
    headCtx.lineWidth = 1;
    headCtx.beginPath();
    headCtx.arc(10, 12, 3, 0, Math.PI);
    headCtx.stroke();
    
    // 将绘制好的龙头画到游戏画布上
    ctx.drawImage(headCanvas, x, y);
}

// 龙身绘制函数
function drawDragonBody(x, y) {
    // 创建canvas来绘制龙身
    const bodyCanvas = document.createElement('canvas');
    bodyCanvas.width = 20;
    bodyCanvas.height = 20;
    const bodyCtx = bodyCanvas.getContext('2d');
    
    // 绘制龙身主体（从金色渐变到绿色）
    const gradient = bodyCtx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#FFD700'); // 金色
    gradient.addColorStop(0.5, '#9ACD32'); // 黄绿色
    gradient.addColorStop(1, '#32CD32'); // 草绿色
    
    bodyCtx.fillStyle = gradient;
    bodyCtx.fillRect(2, 2, 16, 16);
    
    // 绘制龙鳞纹理
    bodyCtx.fillStyle = 'rgba(0, 100, 0, 0.3)';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if ((i + j) % 2 === 0) {
                bodyCtx.beginPath();
                bodyCtx.ellipse(4 + i * 4, 4 + j * 4, 1.5, 1.5, 0, 0, Math.PI * 2);
                bodyCtx.fill();
            }
        }
    }
    
    // 将绘制好的龙身画到游戏画布上
    ctx.drawImage(bodyCanvas, x, y);
}

// 龙尾绘制函数
function drawDragonTail(x, y) {
    // 创建canvas来绘制龙尾
    const tailCanvas = document.createElement('canvas');
    tailCanvas.width = 20;
    tailCanvas.height = 20;
    const tailCtx = tailCanvas.getContext('2d');
    
    // 绘制龙尾主体（深绿色）
    const gradient = tailCtx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#32CD32'); // 草绿色
    gradient.addColorStop(1, '#006400'); // 深绿色
    
    tailCtx.fillStyle = gradient;
    tailCtx.beginPath();
    tailCtx.moveTo(2, 10);
    tailCtx.lineTo(18, 2);
    tailCtx.lineTo(18, 18);
    tailCtx.closePath();
    tailCtx.fill();
    
    // 绘制尾鳍装饰
    tailCtx.fillStyle = 'rgba(0, 100, 0, 0.5)';
    tailCtx.beginPath();
    tailCtx.moveTo(18, 2);
    tailCtx.lineTo(15, 0);
    tailCtx.lineTo(15, 4);
    tailCtx.closePath();
    tailCtx.fill();
    
    tailCtx.beginPath();
    tailCtx.moveTo(18, 18);
    tailCtx.lineTo(15, 16);
    tailCtx.lineTo(15, 20);
    tailCtx.closePath();
    tailCtx.fill();
    
    // 将绘制好的龙尾画到游戏画布上
    ctx.drawImage(tailCanvas, x, y);
}