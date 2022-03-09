# 디몬스터 React Native 템플릿.

#### CreateAt 2022. 01. 19.

##### INFO
로그인 ID : dmonster<br/>
로그인 PW : 1234

***

### 0. 해당 템플릿을 사용하여 프로젝트 시작하기

```
npx react-native-rename "App Name" -b com.dmonster.appname
```

👆 위 명령어를 사용해 **앱 이름**과 **번들명**을 수정해줍니다.
전부가 다 변경되는건 아니지만 대부분의 이름이 수정되며, 번들명도 수정됩니다. (ios는 xcode에서 추가로 수정)

```
react-native set-splash --path "./Assets/Images/splash.png" --resize "cover" --background "#색상값"
```

그다음, 👆 위 명령어를 사용해 스플래쉬 이미지를 교체해줍니다.

- (필요한 파일 3000x3000사이즈의 이미지 파일)

만약 명령어가 작동 하지 않는다면 **react-native-cli** 을 전역으로 설치후 다시 입력합니다.
명령어가 정상적으로 작동했다면, **android/app/src/main/java/com~/MainActivity.java** 파일을 실행해 아래 코드를 확인합니다.

```
@Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(null);
  }
```

만약 위 함수가 이상하게 입력되어 있다면 위 코드처럼 수정해줍니다.
ios는 xcode로 **.xcworkspace**를 실행하여 프로젝트 폴더를 선택후 Images/SplashImage를 선택합니다.
2x의 파일을 선택하고 Cmd+C로 복사해 3x를 선택하고 Cmd+V로 붙어넣어줍니다. 이후 Clean Build를 후 실행합니다.

앱 아이콘은 참고하면 좋은페이지에 있는 iOS App icon 링크와 Android App icon 링크를 통해 제작해서 사용하세요!

- (필요한파일 1024x1024 사이즈의 이미지 파일)

이후 원하는 구조로 수정하여 자유롭게 사용하세요!

### 1. 기본적으로 포함되어 있는 패키지.

- @react-navigation/native
- @react-navigation/native-stack
- react-native-splash-screen
- axios
  \*(0.24 버전으로 고정함. 0.25-0.26 버전에서 formdata를 통한 통신 시 오류가 생깁니다.
- redux
- @bam.tech/react-native-make
- eslint
- babel-plugin-root-import

### 2. 그 외 추천하는 패키지.

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview)
- [react-native-render-html](https://github.com/meliorence/react-native-render-html)
- [react-native-date-picker](https://github.com/henninghall/react-native-date-picker)
- [react-native-picker-select](https://github.com/lawnstarter/react-native-picker-select)
- [dayjs](https://day.js.org/)

### 3. 참고하면 좋은 페이지.

- [React Native](https://reactnative.dev/)
- [rnfirebase](https://rnfirebase.io/)
- [firebase](https://firebase.google.com/)
- [google play console](https://play.google.com/console/about/)
- [app store connection](https://appstoreconnect.apple.com/apps)
- [iOS App icon](https://appicon.co/)
- [Android App icon](<http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher>)

##### 📖 History

2022.01.19 - 첫 커밋
2022.03.08 - React Native 0.67.3 업그레이드 및 기타 정리
