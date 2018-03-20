// This is a JavaScript file

ons.ready(() => {
  
});

const launch_review = () => {
  const appId = ons.platform.isIOS ? '550941371' : 'mobi.monaca.debugger';
  LaunchReview.launch(() => {
    ons.notification.alert('レビュー表示が成功しました');
  }, (err) => {
    ons.notification.alert(`レビュー表示が失敗しました。${JSON.stringify(err)}`);
  }, appId);
}

const launch_review_in_app = () => {
  if (!ons.platform.isIOS()) {
    ons.notification.alert(`この機能はiOSのみサポートされています`);
    return false;
  }
  LaunchReview.rating(() => {
    ons.notification.alert('アプリ内レビューが成功しました');
  }, (err) => {
    ons.notification.alert(`アプリ内レビューが失敗しました。${JSON.stringify(err)}`);
  });
}


const apprate = () => {
  AppRate.preferences.storeAppURL = {
    ios: '550941371',
    android: 'market://details?id=mobi.monaca.debugger'
  };
  
  AppRate.preferences.callbacks.onButtonClicked = function(buttonIndex) {
    ons.notification.alert(`${buttonIndex} のボタンが押されました`);
  };
  AppRate.promptForRating();
}

const apprate_in_app = () => {
  if (!ons.platform.isIOS()) {
    ons.notification.alert(`この機能はiOSのみサポートされています`);
    return false;
  }
  AppRate.preferences.storeAppURL = {
    ios: '550941371'
  };
  AppRate.preferences.callbacks.onButtonClicked = function(buttonIndex) {
    ons.notification.alert(`${buttonIndex} のボタンが押されました`);
  };
  AppRate.preferences.inAppReview = true;
  AppRate.promptForRating();
}



