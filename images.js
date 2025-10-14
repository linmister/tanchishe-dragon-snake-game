// 图像资源对象
const images = {
    food: {
        fruit: null,
        peach: null,
        longevityPeach: null
    },
    snake: {
        head: null,
        body: null,
        tail: null
    }
};

// 创建国风果子图像
function createChineseFruitImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制果子主体（径向渐变）
    const radialGradient = ctx.createRadialGradient(10, 10, 0, 10, 10, 10);
    radialGradient.addColorStop(0, '#FFD700'); // 金色中心
    radialGradient.addColorStop(1, '#FF8C00'); // 橙色边缘
    
    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加光泽效果
    const shineGradient = ctx.createRadialGradient(7, 7, 0, 7, 7, 5);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.arc(8, 8, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加叶子
    ctx.fillStyle = '#32CD32';
    ctx.beginPath();
    ctx.ellipse(15, 5, 3, 2, Math.PI/4, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加纹理
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(10, 10, 6 - i*2, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    return canvas;
}

// 创建蟠桃图像
function createPeachImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制蟠桃主体（径向渐变）
    const radialGradient = ctx.createRadialGradient(10, 12, 0, 10, 12, 8);
    radialGradient.addColorStop(0, '#FFA07A'); // 浅橙色中心
    radialGradient.addColorStop(1, '#FF6347'); // 番茄红边缘
    
    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.ellipse(10, 12, 7, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加光泽效果
    const shineGradient = ctx.createRadialGradient(7, 10, 0, 7, 10, 4);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.ellipse(8, 10, 3, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加叶脉
    ctx.strokeStyle = 'rgba(0, 100, 0, 0.5)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(10, 12);
    ctx.lineTo(15, 5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(8, 10);
    ctx.lineTo(13, 4);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(12, 14);
    ctx.lineTo(16, 8);
    ctx.stroke();
    
    return canvas;
}

// 创建寿桃图像
function createLongevityPeachImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制寿桃主体（径向渐变）
    const radialGradient = ctx.createRadialGradient(10, 12, 0, 10, 12, 8);
    radialGradient.addColorStop(0, '#FFD700'); // 金色中心
    radialGradient.addColorStop(1, '#FFA500'); // 橙色边缘
    
    ctx.fillStyle = radialGradient;
    ctx.beginPath();
    ctx.ellipse(10, 12, 7, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加光泽效果
    const shineGradient = ctx.createRadialGradient(7, 10, 0, 7, 10, 4);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.ellipse(8, 10, 3, 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加高光
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.ellipse(9, 9, 1.5, 1, 0, 0, Math.PI * 2);
    ctx.fill();
    
    return canvas;
}

// 初始化食物图像
function initFoodImages() {
    images.food.fruit = createChineseFruitImage();
    images.food.peach = createPeachImage();
    images.food.longevityPeach = createLongevityPeachImage();
}

// 创建龙头图像
function createDragonHeadImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制龙头主体（金色渐变）
    const gradient = ctx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#FFD700'); // 金色
    gradient.addColorStop(1, '#FF8C00'); // 深橙色
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(10, 10, 8, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制龙眼
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(13, 8, 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(13.5, 7.5, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制龙嘴
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(10, 12, 3, 0, Math.PI);
    ctx.stroke();
    
    // 绘制龙须
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(10, 6);
    ctx.lineTo(5, 3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(10, 6);
    ctx.lineTo(15, 3);
    ctx.stroke();
    
    // 绘制龙角
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(8, 4);
    ctx.lineTo(7, 0);
    ctx.lineTo(9, 2);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(12, 4);
    ctx.lineTo(13, 0);
    ctx.lineTo(11, 2);
    ctx.closePath();
    ctx.fill();
    
    return canvas;
}

// 创建龙身图像
function createDragonBodyImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制龙身主体（从金色渐变到绿色）
    const gradient = ctx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#FFD700'); // 金色
    gradient.addColorStop(0.5, '#9ACD32'); // 黄绿色
    gradient.addColorStop(1, '#32CD32'); // 草绿色
    
    ctx.fillStyle = gradient;
    ctx.fillRect(2, 2, 16, 16);
    
    // 添加光泽效果
    const shineGradient = ctx.createLinearGradient(0, 0, 10, 10);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.moveTo(2, 2);
    ctx.lineTo(10, 2);
    ctx.lineTo(2, 10);
    ctx.closePath();
    ctx.fill();
    
    // 添加装饰圆环
    ctx.strokeStyle = 'rgba(0, 100, 0, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(10, 10, 5, 0, Math.PI * 2);
    ctx.stroke();
    
    // 添加龙鳞纹理
    ctx.fillStyle = 'rgba(0, 100, 0, 0.3)';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if ((i + j) % 2 === 0) {
                ctx.beginPath();
                ctx.ellipse(4 + i * 4, 4 + j * 4, 1.5, 1.5, 0, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    return canvas;
}

// 创建龙尾图像
function createDragonTailImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;
    const ctx = canvas.getContext('2d');
    
    // 绘制龙尾主体（深绿色渐变）
    const gradient = ctx.createLinearGradient(0, 0, 20, 20);
    gradient.addColorStop(0, '#32CD32'); // 草绿色
    gradient.addColorStop(1, '#006400'); // 深绿色
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(2, 10);
    ctx.lineTo(18, 2);
    ctx.lineTo(18, 18);
    ctx.closePath();
    ctx.fill();
    
    // 添加光泽效果
    const shineGradient = ctx.createLinearGradient(10, 10, 18, 10);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(18, 2);
    ctx.lineTo(18, 18);
    ctx.closePath();
    ctx.fill();
    
    // 添加尾鳍装饰
    ctx.fillStyle = 'rgba(0, 100, 0, 0.5)';
    ctx.beginPath();
    ctx.moveTo(18, 2);
    ctx.lineTo(15, 0);
    ctx.lineTo(15, 4);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(18, 18);
    ctx.lineTo(15, 16);
    ctx.lineTo(15, 20);
    ctx.closePath();
    ctx.fill();
    
    // 添加尾部纹理
    ctx.strokeStyle = 'rgba(0, 50, 0, 0.4)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(8, 6);
    ctx.lineTo(16, 4);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(8, 14);
    ctx.lineTo(16, 16);
    ctx.stroke();
    
    return canvas;
}

// 初始化蛇图像
function initSnakeImages() {
    images.snake.head = createDragonHeadImage();
    images.snake.body = createDragonBodyImage();
    images.snake.tail = createDragonTailImage();
}

// 初始化所有图像
function initImages() {
    initFoodImages();
    initSnakeImages();
}

// 获取食物图像
function getFoodImage(type) {
    switch(type) {
        case 'fruit':
            return images.food.fruit;
        case 'peach':
            return images.food.peach;
        case 'longevityPeach':
            return images.food.longevityPeach;
        default:
            return images.food.fruit;
    }
}

// 获取蛇图像
function getSnakeImage(part) {
    switch(part) {
        case 'head':
            return images.snake.head;
        case 'body':
            return images.snake.body;
        case 'tail':
            return images.snake.tail;
        default:
            return images.snake.body;
    }
}

// 在页面加载完成后初始化图像
document.addEventListener('DOMContentLoaded', initImages);