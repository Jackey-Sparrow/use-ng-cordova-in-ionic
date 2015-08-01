# use-ng-cordova-in-ionic
use ngCordova in ionic

# How to use ngCordova

1 read **Website** | [ngCordova.com](http://ngcordova.com/)

2 follow my step

- 1 以使用ActionSheet为例子，虽然ionic已经有类似的directive，但是试一下ngcordova的也不防
- 2 download ionic seed 熟悉使用nodejs的朋友，可以使用nodejs工具去下载
  ```
    1 sudo npm install -g cordova ionic
    
    2 新建工程目录，在cmd命令下进入到该目录。
    
    3 下载工程：ionic start myApp tabs
    
    4 cd myApp
    
    5 下载iOS的platform ： ionic platform add ios
    
    6 build ios: ionic build ios
    
    7 运行工程( 需要ios系统才可以): ionic emulate ios
    
  ```

- 3 进入你的工程目录安装ngCordova

```bash
bower install ngCordova
```
- 4 下载plugin到plugins
```bash
cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
```
- 5 代码部分
- 
  **5.1** 把ng-cordova.js添加在index.html
```html
 <script src="lib/ionic/js/ionic.bundle.js"></script>
 <script src="lib/ngCordova/dist/ng-cordova.js"></script>
 <!-- cordova script (this will be a 404 during development) -->
 <script src="cordova.js"></script>
```
  **5.2** html代码
```html
<button data-ng-click="testDeleteSheet()">test actionsheet</button>
```
  **5.3** js代码
```js
$scope.testDeleteSheet = function () {
        var options = {
          addCancelButtonWithLabel: 'Cancel',
          addDestructiveButtonWithLabel : 'Delete it'
        };
        window.plugins.actionsheet.show(options);
      }
```
  **5.4** 手动添加config.xml以下代码
```xml
<feature name="ActionSheet">
    <param name="ios-package" value="ActionSheet" />
  </feature>
```

# how to run
```bash
ionic build ios
ionic emulate ios
```

#License

MIT

