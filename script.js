// ==================================================================
// 第 1 步：在这里添加你去过的城市和相关信息
// ==================================================================
const myVisitedCities = [
    {
        name: "北京",
        lat: 39.9042, 
        lng: 116.4074, 
        date: "经常去",
        type: "旅游", // 可选: 旅游, 研学, 出差, 探亲, 住处
        note: "宏伟的紫禁城，还有圆明园、颐和园、天坛、景山公园、鸟巢等"
    },
    {
        name: "天津",
        lat: 39.0842,
        lng: 117.2010,
        date: "2012至今",
        type: "住处",
        note: "我就住在这"
    },
    {
        name: "保定",
        lat: 38.8510,
        lng: 115.4900,
        date: "经常去",
        type: "探亲",
        note: "我妈的老家，直隶总督府很好看"
    },
    {
        name: "菏泽",
        lat: 35.2338,
        lng: 115.4410,
        date: "经常去",
        type: "探亲",
        note: "我爸的老家，牡丹之乡"
    },
    {
        name: "哈尔滨",
        lat: 45.7560,
        lng: 126.6420,
        date: "2025年8月",
        type: "旅游",
        note: "东北虎林园、伏尔加庄园，都豪好玩"
    },
    {
        name: "沈阳",
        lat: 41.7960,
        lng: 123.4300,
        date: "2025年8月",
        type: "旅游",
        note: "历史气息厚重的一座城市"
    },
    {
        name: "上海",
        lat: 31.2304,
        lng: 121.4737,
        date: "2025年7月",
        type: "旅游",
        note: "中国最发达的城市，高大的防御塔（东方明珠），遍地的星巴克和哈根达斯，一个没看见的蜜雪冰城"
    },
    {
        name: "威海",
        lat: 37.5130,
        lng: 122.1200,
        date: "2024年8月",
        type: "旅游",
        note: "沙滩很好玩，气候宜人，儿童友好"
    },
    {
        name: "荣成",
        lat: 37.1600,
        lng: 122.4200,
        date: "2025年8月",
        type: "旅游",
        note: "威海下辖县级市，沙滩很好玩，气候宜人"
    },
    {
        name: "青岛",
        lat: 36.0671,
        lng: 120.3826,
        date: "2019年7月",
        type: "旅游",
        note: "宽广的沙滩，高大的崂山"
    },
    {
        name: "大连",
        lat: 38.9140,
        lng: 121.6140,
        date: "2023年8月",
        type: "旅游",
        note: "遍地沙滩"
    },
    {
        name: "大同",
        lat: 40.0768,
        lng: 113.3000,
        date: "2024年5月",
        type: "旅游",
        note: "悬空寺、云冈石窟都很不错"
    },
    {
        name: "济南",
        lat: 36.6512,
        lng: 117.1200,
        date: "忘了",
        type: "旅游",
        note: "趵突泉很有意思呢"
    },
    {
        name: "锡林郭勒盟",
        lat: 43.9334,
        lng: 116.0860,
        date: "忘了",
        type: "旅游",
        note: "一望无际的大草原"
    },
    {
        name: "蓟州",
        lat: 40.0458,
        lng: 117.4080,
        date: "经常去",
        type: "研学",
        note: "天津的后花园，有盘山、黄崖关长城等著名景点，自然风光与历史遗迹完美结合"
    }
    // 在这里继续添加你的足迹...
];


// ==================================================================
// 第 2 步：下面的代码负责实现地图功能，通常无需修改
// ==================================================================

// ---- 地图初始化 ----
const map = L.map('map', {
    minZoom: 3, // 设置最小缩放级别，例如 3，以防止地图缩小到过小的程度
    maxBounds: [[-90, -180], [90, 180]] // 限制地图平移范围为整个世界，防止出现空白区域
}).setView([35.8617, 104.1954], 5); // 初始视角聚焦中国

// ---- 添加底图图层 ----
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// ---- 自定义图标 ----
// 为了让不同类型的访问显示不同图标，我们创建一个图标映射
const iconBaseUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
const icons = {
    '旅游': L.icon({ iconUrl: `${iconBaseUrl}marker-icon-2x-blue.png`, shadowUrl: `${iconBaseUrl}marker-shadow.png`, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }),
    '研学': L.icon({ iconUrl: `${iconBaseUrl}marker-icon-2x-green.png`, shadowUrl: `${iconBaseUrl}marker-shadow.png`, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }),
    '出差': L.icon({ iconUrl: `${iconBaseUrl}marker-icon-2x-orange.png`, shadowUrl: `${iconBaseUrl}marker-shadow.png`, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }),
    '探亲': L.icon({ iconUrl: `${iconBaseUrl}marker-icon-2x-violet.png`, shadowUrl: `${iconBaseUrl}marker-shadow.png`, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }),
    '住处': L.icon({ iconUrl: 'https://wmimg.com/i/1169/2024/09/66ec1739c38a0.png', iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -30] }), // 您自定义的“住处”图标
    // 默认图标
    'default': L.icon({ iconUrl: `${iconBaseUrl}marker-icon-2x-grey.png`, shadowUrl: `${iconBaseUrl}marker-shadow.png`, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] })
};

// ---- 遍历数据并添加到地图 ----
myVisitedCities.forEach(city => {
    // 根据城市类型选择图标，如果没有匹配则使用默认图标
    const selectedIcon = icons[city.type] || icons['default'];

    // 创建标记
    const marker = L.marker([city.lat, city.lng], { icon: selectedIcon }).addTo(map);

    // 创建弹窗内容
    const popupContent = `
        <h3>${city.name}</h3>
        <strong>到访时间：</strong> ${city.date}<br>
        <strong>到访形式：</strong> ${city.type}<br>
        <strong>笔记：</strong> ${city.note}
    `;

    // 绑定弹窗
    marker.bindPopup(popupContent);
});

console.log(`成功加载了 ${myVisitedCities.length} 个城市足迹！`);
