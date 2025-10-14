// 获取canvas元素和上下文
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 游戏变量
let snake = [];
let food = {};
let direction = 'right';
let nextDirection = 'right';
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameSpeed = 150;
let gameRunning = false;
let gameLoop;
let lastUpdateTime = 0;

// DOM元素
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// 初始化游戏
function initGame() {
    // 初始化蛇的位置（在画布中心）
    snake = [
        {x: 8, y: 10},
        {x: 7, y: 10},
        {x: 6, y: 10}
    ];
    
    // 生成食物
    generateFood();
    
    // 重置游戏状态
    direction = 'right';
    nextDirection = 'right';
    score = 0;
    gameSpeed = 150;
    gameRunning = false;
    
    // 更新分数显示
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    
    // 隐藏游戏结束和暂停界面
    const gameOverElement = document.querySelector('.game-over');
    const pauseIndicator = document.querySelector('.pause-indicator');
    if (gameOverElement) gameOverElement.remove();
    if (pauseIndicator) pauseIndicator.remove();
    
    // 绘制初始游戏状态
    drawGame();
}

// 生成食物
function generateFood() {
    // 创建一个不在蛇身上的随机位置
    let newFood;
    let foodOnSnake;
    
    do {
        foodOnSnake = false;
        newFood = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
            type: Math.floor(Math.random() * 3) // 0, 1, 或 2 对应三种不同的食物
        };
        
        // 检查食物是否在蛇身上
        for (let segment of snake) {
            if (segment.x === newFood.x && segment.y === newFood.y) {
                foodOnSnake = true;
                break;
            }
        }
    } while (foodOnSnake);
    
    food = newFood;
}

// 绘制游戏
function drawGame() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制中国风背景装饰
    drawChineseStyleBackground();
    
    // 绘制网格线（可选）
    drawGrid();
    
    // 绘制食物
    drawFood();
    
    // 绘制蛇
    drawDragonSnake();
    
    // 绘制分数
    drawScore();
}

// 绘制中国风背景装饰
function drawChineseStyleBackground() {
    // 绘制云纹图案
    drawCloudPattern();
    
    // 绘制梅花图案
    drawPlumBlossom();
}

// 绘制云纹图案
function drawCloudPattern() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    
    // 绘制几个云朵形状
    const clouds = [
        {x: 50, y: 50, size: 30},
        {x: 300, y: 80, size: 40},
        {x: 150, y: 350, size: 35},
        {x: 350, y: 300, size: 25}
    ];
    
    for (let cloud of clouds) {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 0.8, cloud.y - cloud.size * 0.2, cloud.size * 0.6, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 1.6, cloud.y, cloud.size * 0.8, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 1.2, cloud.y + cloud.size * 0.3, cloud.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 绘制梅花图案
function drawPlumBlossom() {
    ctx.fillStyle = 'rgba(255, 182, 193, 0.1)';
    
    // 绘制几朵梅花
    const blossoms = [
        {x: 100, y: 100},
        {x: 320, y: 200},
        {x: 200, y: 380}
    ];
    
    for (let blossom of blossoms) {
        drawSingleBlossom(blossom.x, blossom.y);
    }
}

// 绘制单朵梅花
function drawSingleBlossom(x, y) {
    ctx.save();
    ctx.translate(x, y);
    
    // 绘制五瓣花
    for (let i = 0; i < 5; i++) {
        ctx.rotate(Math.PI * 2 / 5);
        ctx.beginPath();
        ctx.ellipse(0, -8, 6, 12, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // 绘制花心
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.fill();
    
    ctx.restore();
}

// 绘制网格线
function drawGrid() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 0.5;
    
    // 绘制垂直线
    for (let x = 0; x <= canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// 绘制食物
function drawFood() {
    const foodX = food.x * 20;
    const foodY = food.y * 20;
    
    // 根据食物类型绘制不同的食物
    switch(food.type) {
        case 0: // 国风果子
            drawChineseFruit(foodX, foodY);
            break;
        case 1: // 蟠桃
            drawPeach(foodX, foodY);
            break;
        case 2: // 寿桃
            drawLongevityPeach(foodX, foodY);
            break;
    }
}

// 绘制国风果子
function drawChineseFruit(x, y) {
    // 使用images.js中创建的图像
    const fruitImage = getFoodImage('fruit');
    ctx.drawImage(fruitImage, x, y, 20, 20);
}

// 绘制蟠桃
function drawPeach(x, y) {
    const peachImage = getFoodImage('peach');
    ctx.drawImage(peachImage, x, y, 20, 20);
}

// 绘制寿桃
function drawLongevityPeach(x, y) {
    const longevityPeachImage = getFoodImage('longevityPeach');
    ctx.drawImage(longevityPeachImage, x, y, 20, 20);
}

// 绘制龙形蛇
function drawDragonSnake() {
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        const x = segment.x * 20;
        const y = segment.y * 20;
        
        if (i === 0) {
            // 绘制龙头
            drawDragonHead(x, y);
        } else if (i === snake.length - 1) {
            // 绘制龙尾
            drawDragonTail(x, y);
        } else {
            // 绘制龙身
            drawDragonBody(x, y);
        }
    }
}

// 绘制龙头
function drawDragonHead(x, y) {
    const headImage = getSnakeImage('head');
    ctx.drawImage(headImage, x, y, 20, 20);
}

// 绘制龙身
function drawDragonBody(x, y) {
    const bodyImage = getSnakeImage('body');
    ctx.drawImage(bodyImage, x, y, 20, 20);
}

// 绘制龙尾
function drawDragonTail(x, y) {
    const tailImage = getSnakeImage('tail');
    ctx.drawImage(tailImage, x, y, 20, 20);
}