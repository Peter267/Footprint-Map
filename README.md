<img width="1900" height="554" alt="image" src="https://github.com/user-attachments/assets/7b88649e-f152-4de4-bc2a-209ae0a55f73" />

# 足迹地图 (Footprint Map)

一个展示个人旅行足迹的交互式地图应用，基于Leaflet.js开发，可直观展示去过的城市、到访时间、形式及相关笔记。

## 网站截图
<img width="1499" height="814" alt="image" src="https://github.com/user-attachments/assets/1db8ddc6-5a21-49b2-99e3-ef3b5ecc5a41" />


## 功能特点

- 交互式地图展示个人到访过的城市
- 不同类型的到访（旅游、研学、出差、探亲、住处）使用不同颜色标记
- 点击标记可查看详细信息（到访时间、形式、笔记）
- 响应式设计，适配不同设备屏幕

## 技术栈

- Leaflet.js - 开源交互式地图库
- HTML/CSS/JavaScript - 基础前端技术
- LXGW WenKai 字体 - 美观的中文字体展示

## 开源协议

本项目采用 [MIT 许可证](https://opensource.org/licenses/MIT) 开源

## 使用方法

1. 克隆或下载本项目代码
2. 编辑 `script.js` 文件中的 `myVisitedCities` 数组，添加你去过的城市信息：

   ```javascript
   const myVisitedCities = [
       {
           name: "城市名称",
           lat: 纬度, 
           lng: 经度, 
           date: "到访时间",
           type: "类型", // 可选: 旅游, 研学, 出差, 探亲, 住处
           note: "相关笔记"
       },
       // 更多城市...
   ];
   ```
4. 直接在浏览器中打开 `index.html` 文件即可查看你的足迹地图

## 自定义选项

- 你可以修改 `style.css` 调整地图和弹窗的样式
- 如需更改标记图标，可以修改 `script.js` 中的 `icons` 配置
- 如需更改底图，可以替换 `script.js` 中的 `L.tileLayer` 链接

## 依赖

- [Leaflet.js](https://leafletjs.com/) - 开源地图库
- [LXGW WenKai 字体](https://github.com/lxgw/LxgwWenKai) - 开源中文字体
- [Leaflet Color Markers](https://github.com/pointhi/leaflet-color-markers) - 彩色标记图标

## 致谢

感谢所有开源项目的贡献者，使得本项目得以顺利开发。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Peter267/Footprint-Map&type=Date)](https://www.star-history.com/#Peter267/Footprint-Map&Date)
