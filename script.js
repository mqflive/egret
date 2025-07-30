// 加载 JSON 数据
fetch('data.json')
  .then(response => response.json())
  .then(data => renderCards(data))
  .catch(error => console.error('加载数据失败:', error));

// 渲染卡片到页面
function renderCards(products) {
  const container = document.querySelector('.card-container');
  products.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    // 图片容器，用于更好控制居中
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-img-wrapper';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    imgWrapper.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = item.name;

    const desc = document.createElement('p');
    desc.innerHTML = item.description; // 支持标签渲染

    const btn = document.createElement('button');
    btn.className = 'download-btn';
    btn.textContent = '立即下载';
    // 绑定点击事件，传入下载地址配置
    btn.addEventListener('click', () => handleDownload(item.downloadUrl));

    card.appendChild(imgWrapper);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(btn);

    container.appendChild(card);
  });
}

// 处理下载跳转逻辑
function handleDownload(downloadUrl) {
  const isWin = /Windows|Win32/i.test(navigator.platform);
  const baseDomain = 'https://startgame.lanzouo.com/';
  let targetUrl = '';

  if (downloadUrl.win && isWin) {
    targetUrl = baseDomain + downloadUrl.win;
  } else if (downloadUrl.mac && !isWin) {
    targetUrl = baseDomain + downloadUrl.mac;
  } else if (downloadUrl.all) {
    targetUrl = baseDomain + downloadUrl.all;
  }

  if (targetUrl) {
    window.open(targetUrl, '_blank');
  } else {
    alert('暂未找到对应系统的下载地址');
  }
}