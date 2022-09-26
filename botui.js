var botui = new BotUI('botui-app');
var Photo = 'https://kasi-pro.github.io/kumi/sample.jpg'

//初期メッセージ
botui.message.add({
  photo: Photo,
  content: 'お疲れ様です！',
  delay: 1000
}).then(showQuestions);

//質問の選択肢を表示する関数
function showQuestions(){
  botui.message.add({
    photo: Photo,
    content: 'どういった事にお困りですか？',
    delay: 1000
  }).then(function(){

  return botui.action.button({
    autoHide: false,
    delay: 1000,
    action: [
      {icon: 'sticky-note-o', text: '経理関係', value: 'recruitment'},
      {icon: 'user', text: 'システム関係', value: 'newEmployee'},
      {icon: 'ellipsis-h', text: '運営関係', value: 'other'},
      {text: '終わる', value: 'end'}]
  });
  }).then(function(res){
    botui.action.hide();
      switch(res.value){
        case 'recruitment': showRecruitment(); break;
        case 'newEmployee': showNewEmployee(); break;
        case 'other': showOther(); break;
        case 'end': end(); break;
        default: end();
      }
  });
}

//経理関連カテゴリの質問の選択肢を表示する関数
function showRecruitment(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '当てはまるものをお選びください'
  }).then(function(){

  //ボタンを表示
  return botui.action.button({
    autoHide: false,
    delay: 1000,
    action: [
      {icon: 'circle', text: '未済について', value: 'interviewDifference'},
      {icon: 'circle', text: '引き落としについて', value: 'successCriteria'},
      {icon: 'long-arrow-left', text: '1つ戻る', value: 'return'}]
  });
  }).then(function(res){
    botui.action.hide();
      switch(res.value){
        case 'interviewDifference': showInterviewDifference(); break;
        case 'successCriteria': showSuccessCriteria(); break;
        case 'return': showQuestions(); break;
        default: end(); 
      }  
  });
}

// 未済について
function showInterviewDifference(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '動画で説明いたします。'
  }).then(function(){

  // 動画を表示
  return　botui.message.add({
  type: 'embed',
  content: 'https://www.youtube.com/embed/CXPmAsn9ABQ',
  delay: 1000
}).then(showQuestions);
  });
}

// 引き落としについて
function showSuccessCriteria(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '毎月15日・25日が引き落とし日です。'
  }).then(showQuestions);
}


// システム関連のカテゴリの質問
function showNewEmployee(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '当てはまるものをお選びください'
  }).then(function(){

  //ボタンを表示
  return botui.action.button({
    autoHide: false,
    delay: 1000,
    action: [
      {icon: 'circle', text: '仮想が固まった', value: 'ifference'},
      {icon: 'circle', text: 'WiFiが繋がらない', value: 'riteria'},
      {icon: 'long-arrow-left', text: '1つ戻る', value: 'return'}]
  });
  }).then(function(res){
    botui.action.hide();
      switch(res.value){
        case 'ifference': ifference(); break;
        case 'riteria': uccessCriteria(); break;
        case 'return': showQuestions(); break;
        default: end(); 
      }  
  });
}

function ifference(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '一度ログオフしてください。'
  }).then(showQuestions);
}

function uccessCriteria(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '繋がっている数が多いので少なくしてください。'
  }).then(showQuestions);
}



// 運営関連のカテゴリの質問
function showOther(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '当てはまるものをお選びください'
  }).then(function(){

  //ボタンを表示
  return botui.action.button({
    autoHide: false,
    delay: 1000,
    action: [
      {icon: 'circle', text: 'FQA作成中', value: 'ference'},
      {icon: 'long-arrow-left', text: '1つ戻る', value: 'return'}]
  });
  }).then(function(res){
    botui.action.hide();
      switch(res.value){
        case 'ference': ference(); break;
        case 'return': showQuestions(); break;
        default: end(); 
      }  
  });
}

function ference(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '作成中です。'
  }).then(showQuestions);
}

function uccessCriteria(){
  botui.message.add({
    photo: Photo,
    delay: 1000,
    content: '繋がっている数が多いので少なくしてください。'
  }).then(showQuestions);
}

//プログラムを終了するか聞く関数
function askEnd(){
  botui.message.add({
    photo: Photo,
    delay: 2000,
    content: '他に質問はありますか'
  }).then(function(){
  return botui.action.button({
    delay: 1500,
    action: [
      {icon: 'circle-o', text: 'はい', value: true},
      {icon: 'close', text: 'いいえ', value: false}]
  });
  }).then(function(res){
    res.value ? showQuestions() : end();
  });
}

//プログラムを終了する関数
function end(){
  botui.message.add({
    photo: Photo,
    delay: 1500,
    content: 'お疲れ様でした。'
  })
}