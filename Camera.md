# use-camera-in-ionic

## install pulugin

```
cordova plugin add cordova-plugin-camera
```

## how to use

- html

```
<img id="myImage" style="width:100px; height:100px;"/>
    <button data-ng-click="selectPhoto()">select picture</button>
```

- js

```
$scope.selectPhoto = function () {

        var options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        $cordovaCamera.getPicture(options).then(function (imageUrl) {
            alert(imageUrl);
            var image = document.getElementById('myImage');
            image.src = imageUrl;
        }, function (err) {
            // error
            alert(err);
        });
};

//just for FILE_URL
$cordovaCamera.cleanup().then(function () {

});

```

## 参数

default value

```
{ quality : 75,
  destinationType : Camera.DestinationType.DATA_URL,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 100,
  targetHeight: 100,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false };
```

**quantity**

照片的质量，范围是0--100

**destinationType**

返回值的格式。

默认值：FILE_URL

具体值：

```
Camera.DestinationType = {
    DATA_URL : 0,      // Return image as base64-encoded string
    FILE_URI : 1,      // Return image file URI
    NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
};
```

**sourceType**

设置图片的来源

默认值：拍照

```
Camera.PictureSourceType = {
    PHOTOLIBRARY : 0,//从相册中拿
    CAMERA : 1,//拍照
    SAVEDPHOTOALBUM : 2//保存到相册
};
```

**allowEdit**

是否循序简单的编辑，在选择之前

（boolean）

**encodingType**

图片的格式

默认值：JPEG

```
Camera.EncodingType = {
    JPEG : 0,               // Return JPEG encoded image
    PNG : 1                 // Return PNG encoded image
};
```

**targetWidth**

单位：px

照片的宽度

**targetHeight**

单位：px

照片的高度

**mediaType**

当PictureSourceType是PHOTOLIBRARY | SAVEDPHOTOALBUM
设置文件的类型

```
Camera.MediaType = {
    PICTURE: 0,    // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
    VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
    ALLMEDIA : 2   // allow selection from all media types
};
```

**correctOrientation**

当正在拍摄的时候，是否可以转换图片去矫正设备

Rotate the image to correct for the orientation of the device during capture. (Boolean)


**saveToPhotoAlbum**

拍摄之后自动save到设备上面

(boolean)

**popoverOptions**


iOS-only options that specify popover location in iPad

Defined in CameraPopoverOptions.

**cameraDirection**

选择前置摄像头还是后置摄像头

```
Camera.Direction = {
    BACK : 0,      // Use the back-facing camera
    FRONT : 1      // Use the front-facing camera
};
```