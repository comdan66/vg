/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
  window.page1 = function (j) {
    var s = [{text: '位置圖', en: 'Locations', href: '企業情報_位置圖.html'},
             {text: '經營理念', en: 'Company Philosophy', href: '企業情報_經營理念.html'},
             {text: '公司沿革', en: 'History', href: '企業情報_公司沿革.html'},
             {text: '組織圖', en: 'Organization', href: '企業情報_組織圖.html'},
             {text: '廠區圖', en: 'Die shop Photo', href: '企業情報_廠區圖.html'}];

    var $container = $('.container');

    $container.find ('.l').append ($('<div />').html ('企業情報<span>Company Info</span>'))
                          .append (s.map (function (t, i) {
                            return $('<a />').addClass (i == j ? 'a' : null).attr ('href', t.href).html (t.text + '．' + t.en);
                          }))
                          .append ($('<div />'));

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').attr ('href', s[0].href).text ('企業情報')).add (
          $('<span />').text ('❯')
        ).add (
          $('<a />').addClass ('r').attr ('href', s[j].href).text (s[j].text)
        )
      )).insertBefore ($container);

    $('title').text (s[j].text + '鉅臣');
  };
  window.page2 = function (j) {
    var s = [{text: '設計軟體', en: 'Design software', href: '設備軟體_設計軟體.html'},
             {text: '機工設備', en: 'Machinery', href: '設備軟體_機工設備.html'},
             {text: '鉗工設備', en: 'Tryout press', href: '設備軟體_鉗工設備.html'},
             {text: '品管設備', en: 'Quality & Measurement', href: '設備軟體_品管設備.html'},
             {text: '其他', en: 'Others', href: '設備軟體_其他.html'}];

    var $container = $('.container');

    $container.find ('.l').append ($('<div />').html ('設備 ‧ 軟體<span>Main Manufacture Equipment & Soft</span>'))
                          .append (s.map (function (t, i) {
                            return $('<a />').addClass (i == j ? 'a' : null).attr ('href', t.href).html (t.text + '．' + t.en);
                          }))
                          .append ($('<div />'));

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').attr ('href', s[0].href).text ('設備軟體')).add (
          $('<span />').text ('❯')
        ).add (
          $('<a />').addClass ('r').attr ('href', s[j].href).text (s[j].text)
        )
      )).insertBefore ($container);

    $('title').text (s[j].text + '鉅臣');
  };
  window.page4 = function (j) {
    var s = [{text: '鋁板', en: 'Design software', href: '產品實績_鋁板.html'},
             {text: '鐵板', en: 'Machinery', href: '產品實績_鐵板.html'},
             {text: '高張力', en: 'Tryout press', href: '產品實績_高張力.html'}];

    var $container = $('.container');

    $container.find ('.l').append ($('<div />').html ('產品實績<span>Products</span>'))
                          .append (s.map (function (t, i) {
                            return $('<a />').addClass (i == j ? 'a' : null).attr ('href', t.href).html (t.text + '．' + t.en);
                          }))
                          .append ($('<div />'));

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').attr ('href', s[0].href).text ('產品實績')).add (
          $('<span />').text ('❯')
        ).add (
          $('<a />').addClass ('r').attr ('href', s[j].href).text (s[j].text)
        )
      )).insertBefore ($container);

    $('title').text (s[j].text + '鉅臣');
  };
  window.page3 = function (j) {
    var $container = $('.container');

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').addClass ('r').attr ('href', '製造流程.html').text ('製造流程'))
      )).insertBefore ($container);

    $('title').text ('製造流程' + '鉅臣');
  };
  window.page5 = function (j) {
    var $container = $('.container');

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').addClass ('r').attr ('href', '經驗技術.html').text ('經驗與技術轉換'))
      )).insertBefore ($container);

    $('title').text ('經驗技術' + '鉅臣');
  };
  window.pageC = function (j) {
    var $container = $('.container');

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').addClass ('r').attr ('href', 'contact.html').text ('聯絡我們'))
      )).insertBefore ($container);

    $('title').text ('聯絡我們' + '鉅臣');
  };
  window.page6 = function (j) {
    var $container = $('.container');

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').addClass ('r').attr ('href', '轉投資公司簡介.html').text ('轉投資公司簡介'))
      )).insertBefore ($container);

    $('title').text ('轉投資公司簡介' + '鉅臣');
  };
  window.page7 = function (j) {
    var $container = $('.container');

    $('<div />').addClass ('nav').append ($('<div />').append (
        $('<a />').attr ('href', 'index.html').text ('首頁').add (
          $('<span />').text ('❯')
        ).add ($('<a />').addClass ('r').attr ('href', '主要客戶群.html').text ('主要客戶技術及業務合作'))
      )).insertBefore ($container);

    $('title').text ('主要客戶群' + '鉅臣');
  };

  var top = [{text: 'Contact us', href: 'contact.html'}, {text: 'Home', href: 'index.html'}];
  var middle = 'img/topbar.jpg';
  var bottom = [
    {text: '企業情報<br/>Company Info', content: [
      {text: '位置圖<br/>Locations', href: '企業情報_位置圖.html'},
      {text: '經營理念<br/>Company Philosophy', href: '企業情報_經營理念.html'},
      {text: '公司沿革<br/>History', href: '企業情報_公司沿革.html'},
      {text: '組織圖<br/>Organization', href: '企業情報_組織圖.html'},
      {text: '廠區圖<br/>Die shop Photo', href: '企業情報_廠區圖.html'}
    ]},
    {text: '設備 ‧ 軟體<br/>Main Manufacture<br/>Equipment & Soft', content: [
      {text: '設計軟體<br/>Design software', href: '設備軟體_設計軟體.html'},
      {text: '機工設備<br/>Machinery', href: '設備軟體_機工設備.html'},
      {text: '鉗工設備<br/>Tryout press', href: '設備軟體_鉗工設備.html'},
      {text: '品管設備<br/>Quality & Measurement', href: '設備軟體_品管設備.html'},
      {text: '其 他<br/>Others', href: '設備軟體_其他.html'},
    ]},
    {text: '製造流程<br/>Die Manufacture<br/>flow', href: '製造流程.html'},
    {text: '產品實績<br/>Products', content: [
      {text: '鋁板<br/>Aluminum', href: '產品實績_鋁板.html'},
      {text: '鐵板<br/>Steel', href: '產品實績_鐵板.html'},
      {text: '高張力<br/>High strength', href: '產品實績_高張力.html'},
    ]},
    {text: '經驗與技術轉換<br/>Our performance &<br/>Technical change', href: '經驗技術.html'},
    {text: '轉投資公司簡介<br/>Our Investment<br/>Profile', href: '轉投資公司簡介.html'},
    {text: '主要客戶技術及業務合作<br/>Main Customers&Technical<br/>& business cooperation', href: '主要客戶群.html'},
  ];
  var footer1 = {
    left: ['VG鉅臣企業股份有限公司', 'Van Guard Mold Enterprise CO, LTD.'],
    right: ['TAX │ NO 86448887       TEL │ +886-7-616-3328     FAX │ +886-7-616-3325', 'Add │ 824 高雄市燕巢區角宿里四林路16之20號', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ No.16-20, Silin Rd. ,Jiaosu Vil., Yanchao  Dist., Kaohsiung City 824, Taiwan (R.O.C.)']};

  var footer2 = '© 2016 Van Guard Mold Enterprise CO, LTD. All Rights Reserved ';

  $('<div />').addClass ('bottom').append ($('<div />').append (bottom.map (function (t) {
    if (t.content)
      return $('<span />').html (t.text).append ($('<div />').append (t.content.map (function (u) {
        return $('<a />').attr ('href', u.href).html (u.text);
      })));
    else
      return $('<a />').attr ('href', t.href).html (t.text);
  }))).prependTo ('body');

  $('<div />').addClass ('middle').append ($('<div />').append ($('<img />').attr ('src', middle))).prependTo ('body');

  $('<div />').addClass ('top').append ($('<div />').append (top.map (function (t) {
    return $('<a />').attr ('href', t.href).text (t.text);
  }))).prependTo ('body');

  $('<div />').addClass ('footer1').append ($('<div />').append ($('<div />').addClass ('l').append (footer1.left.map (function (t) { return $('<div />').html (t); }))).append ($('<div />').addClass ('r').append (footer1.right.map (function (t) { return $('<div />').html (t); })))).appendTo ('body');
  $('<div />').addClass ('footer2').append ($('<div />').append (footer2)).appendTo ('body');

});